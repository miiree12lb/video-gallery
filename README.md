# Video Gallery

A streaming-style home for the videos I make: travel, animations, and short educational series that explain computer science, such as cryptography and programming paradigms.

**Live:** https://miiree12lb-video-gallery.com · **Case study:** https://miiree12lb.site/projects/video-gallery

## Features

- **Rows by category,** each with its own slider, like a streaming app. Every category also has a "View all" page with the full grid.
- **Search and category filter** across all videos.
- **Vertical and horizontal videos** get separate sliders, sized to keep their shape: 4 vertical or 2 horizontal per row on desktop, 2 or 1 on phones.
- **Thumbnails first.** A video only loads when someone presses play, so the page stays fast with dozens of videos.
- **One video at a time.** Starting a video pauses the previous one, and playback opens full-screen, including on iPhone and iPad.
- **Licensed music stays on Instagram.** Videos that use commercial music link to their Instagram post instead of being hosted here, where the music licence doesn't apply.

## Tech stack

React, React Router, JavaScript and CSS, with the browser's native video player. The site is built into static files and served from Apache on a custom domain.

## How it's organised

```
src/index.jsx          Video data, categories and routes
src/VideoSlider.jsx    The slider used in each category row
src/ViewAll.jsx        "View all" page for a category
src/DriveVideoEmbed.jsx  A single video card: thumbnail, player, or Instagram link
src/Navbar.jsx         Search and category filter
src/Privacy.jsx        Privacy notice
.htaccess              Sends every route to the app on Apache
```

Each video is a small object (title, subtitle, thumbnail, orientation, and either a video file or an Instagram link), and one list of categories drives both the home page rows and the "View all" routes.

## Running it locally

```sh
npm install
npm start
```

The video files themselves are not in this repository (they're large, so `videos/` is ignored by git). To run the full site, add the files to `src/assets/videos/` with the names imported in `src/index.jsx`.

To publish, run `npm run build` and upload the contents of `build/` to the web server, together with the `.htaccess` file from the project root.
