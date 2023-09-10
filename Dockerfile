FROM oven/bun

COPY . .
RUN bun install --production
EXPOSE 3000

CMD ["bun", "src/index.ts" ]
