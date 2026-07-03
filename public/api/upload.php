<?php
require_once __DIR__ . '/config.php';
checkAuth();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    $errCode = isset($_FILES['image']) ? $_FILES['image']['error'] : 'no file';
    http_response_code(400);
    echo json_encode(['error' => 'No image received (code: ' . $errCode . '). Max upload size may be too small.']);
    exit();
}

$file = $_FILES['image'];
$allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

// Double-check MIME type
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$realMime = finfo_file($finfo, $file['tmp_name']);
finfo_close($finfo);

if (!in_array($realMime, $allowed)) {
    http_response_code(400);
    echo json_encode(['error' => 'Only JPG, PNG, WebP, and GIF are allowed. Got: ' . $realMime]);
    exit();
}

if ($file['size'] > 5 * 1024 * 1024) {
    http_response_code(400);
    echo json_encode(['error' => 'Image must be under 5MB']);
    exit();
}

// Build uploads path relative to public_html
$uploadDir = dirname(__DIR__) . '/uploads/';

if (!is_dir($uploadDir)) {
    if (!mkdir($uploadDir, 0755, true)) {
        http_response_code(500);
        echo json_encode(['error' => 'Could not create uploads folder. Please create /uploads/ manually in cPanel File Manager with 755 permissions.']);
        exit();
    }
}

if (!is_writable($uploadDir)) {
    http_response_code(500);
    echo json_encode(['error' => 'Uploads folder is not writable. Set /uploads/ permissions to 755 in cPanel File Manager.']);
    exit();
}

$ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
$filename = time() . '-' . bin2hex(random_bytes(4)) . '.' . $ext;
$path = $uploadDir . $filename;

if (!move_uploaded_file($file['tmp_name'], $path)) {
    http_response_code(500);
    echo json_encode(['error' => 'Upload failed — could not move file to destination.']);
    exit();
}

echo json_encode(['url' => '/uploads/' . $filename]);
