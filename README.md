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
- **Light and dark mode** with the same switch, colours and font as [miiree12lb.site](https://miiree12lb.site), and the choice is remembered on the next visit.
- **Privacy-friendly.** No cookies, analytics or third-party requests: the font and icons are bundled with the site.

## Tech stack

React, React Router, JavaScript and CSS, built with Vite, with the browser's native video player. The font is Bricolage Grotesque, bundled through Fontsource. The site is built into static files and served from Apache on a custom domain.

## How it's organised

```
src/index.jsx          Video data, categories and routes
src/VideoSlider.jsx    The slider used in each category row
src/ViewAll.jsx        "View all" page for a category
src/DriveVideoEmbed.jsx  A single video card: thumbnail, player, or Instagram link
src/Navbar.jsx         Nav bar: category filter, search, portfolio link and theme switch
src/ThemeSwitch.jsx    Light/dark switch
src/Privacy.jsx        Privacy notice
src/css/theme.css      Colours, font and light/dark themes shared with miiree12lb.site
public/.htaccess       Sends every route to the app on Apache
```

Each video is a small object (title, subtitle, thumbnail, orientation, and either a video file or an Instagram link), and one list of categories drives both the home page rows and the "View all" routes.

## Running it locally

Requires Node.js 20.19 or newer.

```sh
npm install
npm start
```

This starts the Vite dev server at http://localhost:3000.

The video files themselves are not in this repository (they're large, so `videos/` is ignored by git). They are served from the `videos/` folder on the web server and are not part of the build. To play them locally, put them in `public/videos/` with the names used in `src/index.jsx`.

## Deploying

Every push to `main` builds the site and uploads it to the web server over FTPS (`.github/workflows/deploy.yml`). The workflow only uploads files that changed and never touches the server's `videos/` folder. It needs the repository secrets `FTP_SERVER`, `FTP_USERNAME` and `FTP_PASSWORD`, and the variable `FTP_SERVER_DIR` (the site's folder on the server, e.g. `miiree12lb-video-gallery.com/`).

To add a video: put the file in `public/videos/`, upload it to `videos/` on the server, then add it to `src/index.jsx` and push.
