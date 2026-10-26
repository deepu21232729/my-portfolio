# Deepika Piriya — Portfolio

Cinematic dark portfolio built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lenis** (smooth scroll).

## Run

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Requires Node 18.18+ (tested on Node 22).

## Replace the video, photo and résumé

All assets live in `public/`:

| File | Used for |
|---|---|
| `public/media/hero.mp4` + `hero.webm` | Hero video (framed clip + blurred ambient background) |
| `public/media/hero-poster.jpg` | Poster / reduced-motion frame |
| `public/media/portrait.jpg` | About-section ID-card portrait (also the social-share image) |
| `public/resume/Deepika-Piriya-Resume.pdf` | **Add your résumé here** – powers the "Download Résumé" buttons |

The supplied originals are small (video 400×368, photo 570×535). They were upscaled 2× with Lanczos + light sharpening, which is smoother but cannot add real detail. For truly sharp results, drop in originals of **1920×1080+ (video)** and **2000px+ wide (portrait)** using the same file names. Suggested encodes:

```bash
ffmpeg -i source.mp4 -an -c:v libx264 -preset slow -crf 17 -pix_fmt yuv420p -movflags +faststart public/media/hero.mp4
ffmpeg -i source.mp4 -an -c:v libvpx-vp9 -crf 22 -b:v 0 public/media/hero.webm
ffmpeg -i source.mp4 -vf "select=eq(n\,60)" -frames:v 1 -q:v 2 public/media/hero-poster.jpg
```

If the new video is landscape, change `aspect-[400/368]` in `components/Hero.tsx` to `aspect-video`.

## Edit content

Everything is in **`lib/data.ts`** (profile, skills, projects, experience, education, certifications).
The JMBAXI achievements there are drawn only from the supplied profile text — replace them with the exact bullets from your résumé.

## Structure

```
app/            layout, page, global styles
components/     Hero, About, Skills, Projects, Experience, EducationCerts, Contact, Nav, Reveal, SmoothScroll
lib/data.ts     all content
public/         media + résumé
```

Set `NEXT_PUBLIC_SITE_URL` to your domain for correct social-share image URLs. Deploys as-is to Vercel.
