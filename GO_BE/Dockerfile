FROM node:20

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép tệp package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

COPY prisma ./prisma/

RUN npx prisma generate --schema ./prisma/schema.prisma

# Cài đặt các dependencies
RUN npm install

# Sao chép tất cả các tệp trong thư mục hiện tại vào thư mục làm việc trong container
COPY . .

# Mở cổng mạng ứng dụng (thay đổi cổng này nếu cần thiết)
EXPOSE 5000

# Khởi động ứng dụng
CMD ["npm", "start"]