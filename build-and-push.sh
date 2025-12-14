#!/bin/bash

# GitHub Container Registry build and push script
# Usage: ./build-and-push.sh [version]

VERSION=${1:-latest}
IMAGE_NAME="ghcr.io/husainf4l/bedbees-investors"

echo "🚀 Building Docker image: $IMAGE_NAME:$VERSION"

# Build the image
docker build -t $IMAGE_NAME:$VERSION -t $IMAGE_NAME:latest .

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📦 To push to GitHub Container Registry:"
    echo "1. Login to GHCR:"
    echo "   echo \$GITHUB_TOKEN | docker login ghcr.io -u husainf4l --password-stdin"
    echo ""
    echo "2. Push the image:"
    echo "   docker push $IMAGE_NAME:$VERSION"
    echo "   docker push $IMAGE_NAME:latest"
    echo ""
    echo "📋 Or run these commands now:"
    read -p "Do you want to push now? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        docker push $IMAGE_NAME:$VERSION
        docker push $IMAGE_NAME:latest
        echo "✅ Images pushed successfully!"
    fi
else
    echo "❌ Build failed!"
    exit 1
fi
