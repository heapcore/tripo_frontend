# tripo_frontend

> **WARNING:** This repository may be unstable or non-functional. Use at your own risk.

A lightweight frontend wrapper for the official TripoSR interface.

## Project Structure

- `frontend/` - our standalone React UI that embeds official TripoSR.
- `examples/maneki_neko.png` - local sample image for testing.
- `TripoSR/` - local clone of official repo (ignored by Git).

## Setup

1. Clone official TripoSR repository into this folder:

```bash
git clone https://github.com/VAST-AI-Research/TripoSR.git TripoSR
```

2. Run official TripoSR UI from the cloned repo (example):

```bash
cd TripoSR
python gradio_app.py --listen --port 7860
```

3. Run this frontend wrapper:

```bash
docker compose up --build
```

Then open `http://localhost:3000`.
The page embeds the official TripoSR UI from `http://localhost:7860`.

## Configuration

You can override the embedded URL by changing `VITE_TRIPOSR_UI_URL` in `docker-compose.yml`.

## License

See `LICENSE`.
