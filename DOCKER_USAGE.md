# Docker Setup for BedBees Investors Website

## 🚀 Quick Start

### Build the Docker Image Locally

```bash
docker build -t ghcr.io/husainf4l/bedbees-investors:latest .
```

### Run the Container

```bash
docker run -p 3000:3000 ghcr.io/husainf4l/bedbees-investors:latest
```

Visit `http://localhost:3000` to see your app running!

---

## 📦 Push to GitHub Container Registry (GHCR)

### 1. Create a GitHub Personal Access Token (PAT)

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Select scopes:
   - `write:packages` (to push images)
   - `read:packages` (to pull images)
   - `delete:packages` (optional, for cleanup)
4. Copy the token

### 2. Login to GHCR

```bash
echo YOUR_GITHUB_TOKEN | docker login ghcr.io -u husainf4l --password-stdin
```

Or export the token first:

```bash
export CR_PAT=YOUR_GITHUB_TOKEN
echo $CR_PAT | docker login ghcr.io -u husainf4l --password-stdin
```

### 3. Push the Image

```bash
docker push ghcr.io/husainf4l/bedbees-investors:latest
```

### 4. Pull and Run from GHCR (on any machine)

```bash
# Pull the image
docker pull ghcr.io/husainf4l/bedbees-investors:latest

# Run it
docker run -p 3000:3000 ghcr.io/husainf4l/bedbees-investors:latest
```

---

## 🔄 Automated CI/CD with GitHub Actions

The repository includes a GitHub Actions workflow (`.github/workflows/docker-ghcr.yml`) that automatically:

1. Builds the Docker image on every push to `master`
2. Pushes it to GHCR with the `latest` tag

**To enable this:**

1. Go to your GitHub repo → Settings → Actions → General
2. Ensure "Read and write permissions" is enabled for workflows
3. Push to `master` branch - the workflow will run automatically!

The workflow uses `GITHUB_TOKEN` (automatically provided by GitHub Actions), so no manual token setup is needed.

---

## 🐳 Docker Compose (Optional)

If you want to use `docker-compose.yml`:

```bash
docker-compose up -d
```

This will start the app on port 3000.

---

## 📝 Notes

- **Next.js Version**: 15.5.9 (latest stable as of Dec 2024)
- **React Version**: 18.3.0 (stable)
- **Node Version**: 20 Alpine (lightweight)
- **Output Mode**: Standalone (optimized for Docker)
- **Port**: 3000 (default Next.js port)

---

## 🛠️ Troubleshooting

### Image won't push to GHCR

- Make sure you're logged in: `docker login ghcr.io`
- Verify your token has `write:packages` scope
- Check the image name matches your GitHub username: `ghcr.io/husainf4l/bedbees-investors`

### Build fails

- Run `npm install` first to ensure dependencies are up to date
- Check that `next.config.js` has `output: 'standalone'`

### Container won't start

- Check logs: `docker logs <container_id>`
- Verify port 3000 isn't already in use: `lsof -i :3000`

---

## 🎯 Production Deployment

For production deployments, consider:

1. **Environment Variables**: Pass them with `-e` flag or use `.env` file
2. **Health Checks**: Add Docker health check in Dockerfile
3. **Multi-arch builds**: Use `docker buildx` for ARM and x86 support
4. **Version tags**: Tag images with version numbers, not just `latest`

Example with environment variables:

```bash
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  ghcr.io/husainf4l/bedbees-investors:latest
```

---

Happy Deploying! 🚀
