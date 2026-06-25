# WordPress Handoff Notes

This project has been prepared for WordPress conversion by generating a static export in the `out/` folder.

## What Is Ready

- `out/index.html` contains the exported landing page.
- `out/_next/` contains the compiled CSS and JavaScript.
- `out/images/` contains all image assets.
- `out/videos/` contains the hero and portfolio background videos.
- `out/404.html` is the exported fallback page.

## Recommended WordPress Conversion Path

For a proper WordPress build, convert the exported landing page into a custom theme template:

1. Create a custom WordPress theme.
2. Move assets into the theme, for example:
   - `assets/images/`
   - `assets/videos/`
   - `assets/css/`
   - `assets/js/`
3. Convert `out/index.html` into `front-page.php`.
4. Replace static asset paths such as `/images/...`, `/videos/...`, and `/_next/...` with WordPress theme URLs:
   ```php
   <?php echo esc_url(get_template_directory_uri()); ?>
   ```
5. Enqueue CSS and JavaScript through `functions.php`.
6. Replace hardcoded sections with WordPress editable fields if needed.

## Fast Preview / Upload Path

If the platform supports raw static uploads, upload the full contents of `out/` as-is. Keep the folder structure unchanged:

```text
index.html
_next/
images/
videos/
404.html
```

This is the quickest way to preserve the exact design and interactions.

## Important Notes

- The video `out/videos/whiskey-on-ice.mp4` is large. WordPress upload limits may block it. If that happens, upload videos via FTP/SFTP or host them on a CDN and update the video paths.
- The current page uses exported Next.js JavaScript. For a long-term WordPress theme, the interactions should be rewritten as plain theme JavaScript instead of depending on the exported Next bundle.
- The design is static and does not require a backend to display.
