docker run -d \
  -it \
  --name codeutility_web \
  --mount type=bind,source="$(pwd)",target=/app \
  codeutility:latest