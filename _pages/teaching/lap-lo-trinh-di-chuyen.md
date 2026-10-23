---
layout: teaching-course
title: Lập lộ trình di chuyển
description: Đại học
permalink: /teaching/lap-lo-trinh-di-chuyen/
course_slug: lap-lo-trinh-di-chuyen
lang: vi
---

## Học phần hướng đến điều gì?

Để một ô tô tự đi từ cổng vào bãi đỗ, ta phải chọn tuyến, xử lý xe và người trên đường, rồi tính cách đánh lái, tăng tốc và phanh. Học phần đi theo chính chuỗi câu hỏi ấy: đặt bài toán, tìm phương án và kiểm tra xem xe có thực hiện được hay không.

Sinh viên cần biết lập trình cơ bản, vectơ và ma trận, đạo hàm và tích phân. Trước khi chạy thí nghiệm, hãy phân biệt vị trí với hướng xe, mét với ô lưới, độ với radian và thời gian mô hình với thời gian tính toán.

![Các tầng lập kế hoạch và vòng phản hồi của ô tô tự hành](/assets/teaching/planning-foundations/hierarchy.png)

## Từ một thuật toán đến một chuyển động có thể thực hiện

| Chương                 | Câu hỏi chính                                   | Kết quả cần giải thích được                                                                                                           |
| ---------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1 — Giới thiệu         | Bài toán cần đầu vào và giả định nào?           | Phân biệt tuyến, hành vi, đường hình học, quỹ đạo và lệnh điều khiển; nêu phạm vi vận hành của ví dụ.                                 |
| 2 — Thiết lập bài toán | Xe có thể chiếm và đi qua những trạng thái nào? | Chọn điểm tham chiếu, mô hình thân xe và phép kiểm cả chuyển động; phân biệt robot đĩa với xe có giới hạn lái.                        |
| 3 — Tìm kiếm           | Chọn tuyến trên mạng đường bằng cách nào?       | Dùng đồ thị có hướng, chi phí cùng đơn vị và heuristic có căn cứ; hiểu kết quả tìm kiếm còn cần được chuyển thành chuyển động của xe. |
| 4 — Tối ưu             | Tạo và thực hiện quỹ đạo thế nào?               | Kiểm ràng buộc riêng với chi phí; liên hệ đường, vận tốc, độ cong, giới hạn lái và sai số bám trong vòng phản hồi.                    |
| 5 — Môi trường động    | Khi nào đi, chậm lại, dừng hoặc tiếp tục?       | Lập luận từ dự đoán, quyền ưu tiên và khoảng dừng; kiểm hành vi khi dữ liệu cũ, vật thể bị che hoặc dự đoán thay đổi.                 |

Bản đồ định vị giúp xác định xe đang ở đâu. Lưới chiếm chỗ giúp đánh giá vùng thân xe có thể va chạm. Mạng làn đường mô tả kết nối và những chuyển hướng được phép. Ba cách biểu diễn phục vụ ba câu hỏi khác nhau; không thể chỉ thay tên rồi dùng chúng như cùng một dữ liệu.

## Bài tập xuyên suốt: từ bãi đỗ đến giao lộ

Qua mỗi chương, hãy bổ sung vào nhật ký thực hành: bài toán đặt ra, mô hình đã chọn, kết quả chạy và lý do chấp nhận hoặc loại phương án. Mỗi demo dùng một mô hình riêng để làm rõ vấn đề đang học; khi ghép các phần, ta còn phải kiểm tra cách chúng làm việc cùng nhau.

1. **Đặt bài toán:** mô tả điểm đầu, vùng đích, bản đồ, hệ quy chiếu, kích thước xe và điều kiện được giả định. Ví dụ lớp học có thể giả định mặt đường phẳng, khô, bản đồ hai chiều đã biết; phải ghi thêm vận tốc và phạm vi cảm biến nếu dùng chúng.
2. **Chọn biểu diễn:** viết rõ trạng thái theo tâm trục sau hay điểm khác. Vẽ phần thân xe tương ứng. Một quỹ đạo hợp lệ cho robot đĩa chưa là quỹ đạo hợp lệ cho ô tô.
3. **Chọn tuyến và quỹ đạo:** tách quyết định qua đoạn đường nào khỏi việc ô tô ôm cua và đến mỗi vị trí lúc nào. Thử thêm đường một chiều hoặc chặn một kết nối để giải thích lúc phải lập lại kế hoạch.
4. **Đóng vòng phản hồi:** [chạy bài bám đường Pure Pursuit](/teaching/lap-lo-trinh-di-chuyen/chuong-4/bam-duong/). Giữ đường tham chiếu, thay vận tốc và khoảng nhìn trước, rồi đọc cả sai số lẫn mức sử dụng giới hạn lái. Một mô hình động học vẫn có thể bám tốt ở cấu hình vượt ngưỡng gia tốc ngang đã chọn.
5. **Kiểm tình huống:** so đường trống, xe dừng phía trước, xe cắt ngang, người đi bộ và vùng khuất. Thêm trường hợp dữ liệu không còn mới; nêu phản ứng mong muốn trước khi xem kết quả.

Mỗi báo cáo cần ghi cấu hình, giả định, đơn vị, kết quả và nguyên nhân bị loại. Đánh giá riêng việc tới đích, va chạm, vi phạm giới hạn, sai số bám và thời gian tính. Giá trị trung bình có thể che mất một vài lần va chạm hoặc vượt giới hạn, nên hãy đọc cả kết quả chung lẫn từng lần chạy.

## Cách dùng tài liệu tham khảo

Học phần tham khảo cách tổ chức kiến thức trong [Introduction to Self-Driving Cars](https://www.coursera.org/learn/intro-self-driving-cars) và [Motion Planning for Self-Driving Cars](https://www.coursera.org/learn/motion-planning-self-driving-cars) của University of Toronto. Các bài tập và hình minh họa trên Teaching được biên soạn riêng cho học phần này.

Đọc thêm theo mục tiêu: _Software Architecture_ và _Environment Representation_ cho Chương 1–2; _Mission Planning_ cho Chương 3; mô hình xe đạp và _Pure Pursuit_ cho Chương 4; dự đoán và _Behaviour Planning_ cho Chương 5. Video mở đầu của chuyên ngành giúp nhìn toàn cảnh, còn từng bài cụ thể giúp đối chiếu giả định và đầu ra của mỗi khối. Các hướng dẫn cài đặt cũ cần được kiểm tra theo môi trường hiện dùng; bài thực hành tích hợp của học phần tiếp tục dùng ROS 2.

Các demo trên trang chạy trong trình duyệt để giúp ta học và kiểm từng mô hình. Nếu làm tiếp trên CARLA, hãy ghi phiên bản, bản đồ, thời tiết, cảm biến, bộ điều khiển và kịch bản thử. Kết quả ở trình duyệt, CARLA, đường thử và xe thật cần được báo cáo riêng để biết mỗi kết luận dựa trên bằng chứng nào.
