---
layout: teaching-lab
title: "Chương 5: Phối hợp giao thông, người đi bộ và vùng khuất"
description: Lập lộ trình di chuyển · Đại học
permalink: /teaching/lap-lo-trinh-di-chuyen/chuong-5/
course_slug: lap-lo-trinh-di-chuyen
chapter_number: 5
lang: vi
---

## Mục tiêu thực hành

Hãy thử một giả định, chạy cùng tình huống với hai cách xử lý, rồi giải thích vì sao kết quả khác nhau. Ba phần lần lượt xét **phối hợp hai ô tô**, **nhường người đi bộ** và **chọn vận tốc theo tầm nhìn**. Chúng dùng mô hình đủ nhỏ để tính tay và kiểm lại; không cần kết nối xe hoặc cài ROS 2.

## 1. Hai ô tô qua giao lộ

Giữ biên lập lịch **0,3 m**, đệm thời gian **0,5 s**, A đi trước. Hai xe dài 4,4 m, rộng 1,8 m; mỗi xe xuất phát cách tâm giao lộ 18 m, từ đứng yên tăng tốc 2 m/s² tới 4 m/s. Tuyến đi vuông góc, hướng cố định.

- Chạy **Cùng khởi hành**: kiểm khoảng tiếp xúc **4,725–6,275 s**.
- Chạy **Đặt chỗ**: B chờ **2,2 s** trước khi khởi hành. Khoảng đặt chỗ A là 4,65–6,35 s và B là 6,85–8,55 s. Bộ kiểm không phát hiện tiếp xúc; hở nhỏ nhất trên mẫu 1 ms khoảng **1,838 m**.
- Đổi sang B đi trước rồi thay đệm. So thời gian chờ, khoảng đặt chỗ và kết quả kiểm thân.

Điều phối chỉ dời giờ khi xe chưa chạy. Đây chưa phải cách ghép một lịch mới vào xe đang chuyển động. Mốc đích là đi qua vạch, chưa thiết kế phanh cuối tuyến.

## 2. Người đi bộ cắt ngang

Tâm xe ở −18 m, vận tốc 8 m/s. Người đi bộ ở (0,−3) m, đi ngang 1,5 m/s; thân được xấp xỉ bằng hộp vuông cạnh 0,6 m.

- **Giữ vận tốc**: tiếp xúc từ **1,9375 tới 2,5625 s**. Vị trí người ở khung đầu chưa đại diện cho cả lần chạy.
- **Nhường, trễ 0,2 s**: xe phanh đều 3 m/s², dừng rồi đi tiếp sau khi hết khoảng dự báo có biên 0,5 m và đệm 0,4 s. Quãng dừng khoảng **12,267 m**; mép trước dừng ở −3,533 m. Không có tiếp xúc theo kiểm khoảng; hở nhỏ nhất trên mẫu 1 ms khoảng **3,235 m**.
- **Nhường, trễ 0,8 s**: cùng mức phanh nhưng quãng dừng tăng tới **17,067 m**. Tiếp xúc đầu khoảng **2,4447 s**. Giữ lại lần thất bại này để phân tích.

Thông tin người được biết ở mốc 0; trễ là thời gian tới khi bắt đầu phanh, chưa mô phỏng một pipeline cảm biến trễ. Chính sách nhường giữ phanh tới khi đứng yên rồi mới tăng tốc lại, với gia tốc 2 m/s². Dự báo giả định người đi thẳng đều; chưa có dừng, quay đầu hoặc nhận dạng ý định.

## 3. Vận tốc trước vùng khuất

Khoảng nhìn từ **mép trước** tới ranh giới là 8 m. Giữ lại 2 m, trễ 0,6 s và giảm tốc 3 m/s². Xe chỉ được dùng **6 m** để dừng.

Ở 8 m/s, khoảng dừng là **15,467 m**, chưa đáp ứng. Chế độ giới hạn chọn vận tốc **4,464183905 m/s**, cho khoảng dừng 6 m trong mô hình. Tăng trễ tới 1 s làm cận vận tốc giảm còn **3,708203932 m/s**.

Cận được chọn trước khi xe tới trạng thái lộ vùng. Không thể đang chạy 8 m/s rồi hạ ngay vận tốc về cận mà không kiểm quá trình giảm tốc. Phần này **chưa mô phỏng người ẩn**; nó kiểm điều kiện dừng trước vùng chưa quan sát, không đo tỷ lệ tránh người ngoài thực tế.

## Đọc kết quả đúng cách

Kéo thanh thời gian để xem từng mốc. Hoạt hình hiển thị trạng thái gần nhất trong chuỗi 0,05 s, còn bộ kiểm tiếp xúc dùng nghiệm chạm biên trên từng đoạn gia tốc không đổi. **Tiếp xúc cũng tính là va chạm.** Khoảng hở nhỏ nhất được thống kê riêng trên mẫu 1 ms; không gọi nó là cực tiểu liên tục đã chứng nhận.

Nút **Lưu JSON** giữ cấu hình, kết quả và trạng thái. **Lưu CSV** giữ trạng thái theo thời gian. Ba video dự phòng được ghép từ ảnh chụp trực tiếp canvas theo từng mốc mô hình, giữ khung kết thúc. Dấu giờ trong canvas là thời gian mô hình; thời gian phát có thể khác.

## Video nguồn về ô tô tự hành

**CARLA / ISL and Collaborators:** video gốc của nghiên cứu CARLA, CoRL 2017, có cảnh giao thông, người đi bộ và các lớp dữ liệu cảm biến. Xem khoảng 00:55–01:25 để phân biệt hình ảnh với trạng thái, rồi khoảng 01:35–02:30 để so các cách lái. Đây là simulator của tác giả, không phải lần chạy CARLA của lớp.

<div class="teaching-actions"><a href="https://www.youtube.com/watch?v=Hp8Dz-Zek2E&amp;t=55s" target="_blank" rel="noopener">Xem video CARLA chính thức</a><a href="https://arxiv.org/abs/1711.03938" target="_blank" rel="noopener">Đọc nghiên cứu CARLA</a></div>

**Waymo — Navigating around the Wiggle:** ô tô tự hành thật đi giữa các nhóm người đi xe đạp, có hình hiển thị thế giới ước lượng kèm cảnh camera. Xem 00:10–00:40; ghi riêng điều quan sát được và điều chưa biết về bộ lập kế hoạch.

<div class="teaching-actions"><a href="https://www.youtube.com/watch?v=WlNsXFUrNQc&amp;t=10s" target="_blank" rel="noopener">Xem Waymo tương tác với xe đạp</a><a href="https://waymo.com/blog/2021/06/beyond-the-bike-lane/" target="_blank" rel="noopener">Đọc mô tả của Waymo</a></div>

Bài Waymo còn kể một sự kiện khác có người đi xe đạp ngã. Nguồn ghi rõ chuyên viên **đã can thiệp trong thực tế**; kết quả không can thiệp chỉ được tác giả phát lại trong mô phỏng. Không gộp hai loại bằng chứng thành một lần xe thật tự xử lý thành công.

## Ảnh chụp từ demo của chương

![Nhường người đi bộ, trễ 0,2 giây, tại mốc mô hình 2,85 giây: xe gần dừng trước vùng giao cắt](/assets/teaching/hki-2026-2027/lap-lo-trinh-di-chuyen/chuong-5/sim53.png)

![Nhường người đi bộ, trễ 0,8 giây, tại 2,6 giây: kết quả ghi nhận tiếp xúc dù đã phanh](/assets/teaching/hki-2026-2027/lap-lo-trinh-di-chuyen/chuong-5/sim54.png)

![Vùng khuất với giới hạn vận tốc, trễ 0,6 giây, tại 2,2 giây: kiểm khoảng dừng trước ranh giới](/assets/teaching/hki-2026-2027/lap-lo-trinh-di-chuyen/chuong-5/sim73.png)

## Báo cáo cần nộp

Với mỗi phần, nộp cấu hình gốc và ít nhất hai biến thể có chủ đích, dữ liệu JSON/CSV, hình giải thích và nhận xét. Giữ ít nhất một trường hợp không đạt. Báo riêng tiếp xúc, hoàn thành và chỉ số phù hợp; với vùng khuất chỉ dùng điều kiện dừng đang được mô hình hóa.

Phần mở rộng có thể thêm người dừng hoặc quay lại, hoặc vật cản động cho đường Dubins / RRT\*. Ghi rõ phần nào đã triển khai và chạy, phần nào mới là thiết kế. RRT\*–FND trong đề cương cần xác định đúng tài liệu biến thể trước khi hiện thực; không tự định nghĩa tên viết tắt.

## Tài liệu và phạm vi

[LaValle, Chương 7: bài toán có thời gian và nhiều robot](https://lavalle.pl/planning/ch7.pdf) · [Sharon và cộng sự, CBS](https://mapf.info/index.php/Main.AFeln15a) · [Trang tác giả ORCA](https://gamma.cs.unc.edu/ORCA/).

Các mô phỏng đã được đối chiếu với các phép tính mẫu và 56 cấu hình kiểm số. Mô hình tuyến thẳng, hướng cố định và gia tốc hằng theo đoạn chưa có lốp, độ dốc, cơ cấu phanh hoặc giới hạn jerk đầy đủ. Chưa là một planner giao thông hoàn chỉnh, triển khai ROS 2 hay kiểm chứng xe thật. [Nguồn hình và video](/assets/teaching/hki-2026-2027/lap-lo-trinh-di-chuyen/chuong-5/MEDIA-SOURCES.md).

## Chọn hành vi bằng trạng thái và điều kiện chuyển

![Máy trạng thái minh họa tiến, giảm tốc, dừng và tiếp tục](/assets/teaching/planning-foundations/behaviour.png)

Viết bốn trạng thái: **đi theo tuyến → giảm tốc → dừng chờ → tiếp tục**. Trên mỗi mũi tên, ghi điều kiện chuyển dựa trên vùng xung đột, dữ liệu còn mới, đủ khoảng dừng và khoảng trống đã được xác nhận. Quyền ưu tiên là một đầu vào của quyết định, không bảo đảm xe khác sẽ nhường.

Khi đang dừng, yêu cầu điều kiện “đã trống đủ lâu” để tránh đổi trạng thái liên tục vì nhiễu. Nếu dữ liệu quá cũ hoặc không xác định được vùng xung đột, đánh dấu trạng thái không đủ thông tin và gọi chính sách xử lý đã thiết kế. Chọn trạng thái “giảm tốc” mới là quyết định hành vi. Ta còn phải tính quỹ đạo phanh theo giới hạn xe và phần đường đang có.

**Bảng thử cần bổ sung:** đường trống, xe trước dừng, xe cắt ngang, người đi bộ, vùng khuất và dữ liệu trễ. Với mỗi hàng, ghi điều kiện đầu, hành vi mong muốn, thời điểm kích hoạt, khoảng hở nhỏ nhất và có đủ khoảng dừng hay không. Các demo hiện có chưa triển khai toàn bộ máy trạng thái và tình huống dữ liệu cũ; hãy dùng bài thiết kế này để giải thích cách ghép những phép thử riêng thành một hệ thống.

### Tài liệu đọc thêm

[Motion Planning — Behaviour Planning — University of Toronto / Coursera](https://www.coursera.org/learn/motion-planning-self-driving-cars).
