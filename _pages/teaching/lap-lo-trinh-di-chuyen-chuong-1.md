---
layout: teaching-lab
title: "Chương 1: Ba đường đi, ba kết luận"
description: Lập lộ trình di chuyển · Đại học
permalink: /teaching/lap-lo-trinh-di-chuyen/chuong-1/
course_slug: lap-lo-trinh-di-chuyen
chapter_number: 1
lang: vi
---

## Thực hiện

1. Chạy cấu hình gốc. Ghi độ dài, khoảng hở và bán kính quay nhỏ nhất của ba đường.
2. Tăng bán kính quay yêu cầu từ 3 m lên 8 m, rồi đưa về cấu hình gốc và tăng riêng biên lên 0,50 m. Giải thích vì sao một đường đổi kết luận.
3. Tải số liệu JSON và lưu cấu hình cùng kết quả. Phân biệt đường ngắn, đường không va chạm và đường thỏa các điều kiện đang xét.

## Báo cáo kết quả

Lưu cấu hình, kết quả trước và sau khi đổi tham số, cùng một giải thích dựa trên mô hình. Giữ cả những lần chưa tìm được đường hoặc chưa hội tụ.

## Phạm vi mô hình

Demo dùng hình học lấy mẫu trong bản đồ tĩnh. Kết quả của mô hình chưa chứng minh khả năng vận hành an toàn trên xe thật.

## Liên hệ với kiến trúc ô tô tự hành

Sau khi kiểm ba đường, hãy xét thêm một tình huống: nếu có xe đang đỗ phía trước, xe của ta nên đi vòng hay dừng chờ? Tuyến cho biết nơi cần đi qua; hành vi thu hẹp những chuyển động được phép; quỹ đạo mô tả chuyển động theo thời gian; bộ điều khiển thực hiện lệnh lái, ga và phanh.

Ghi phạm vi vận hành (ODD) của bài: loại đường, môi trường, vùng hoạt động và giới hạn vận tốc. Đây là điều kiện mà hệ thống được thiết kế để hoạt động, không phải nhãn bảo đảm an toàn. Demo chỉ có bản đồ hai chiều đã biết; chưa mô phỏng nhận thức và định vị.

**Câu hỏi thảo luận:** nếu bản đồ vẫn mở được nhưng dữ liệu vị trí đã cũ, có nên tiếp tục dùng quỹ đạo vừa tính? Hãy nêu dữ liệu bộ giám sát cần kiểm và cách xử lý nếu dữ liệu không còn dùng được. Nếu chọn dừng, cần tính cả chuyển động phanh và khả năng thực hiện; chỉ ngừng gửi lệnh thì chưa đủ.

### Tài liệu đọc thêm

[Software Architecture — University of Toronto / Coursera](https://www.coursera.org/learn/intro-self-driving-cars/lecture/RQCqM/lesson-3-software-architecture).
