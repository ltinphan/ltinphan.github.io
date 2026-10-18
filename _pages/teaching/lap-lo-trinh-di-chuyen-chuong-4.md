---
layout: teaching-lab
title: "Chương 4: Chi phí, SQP, IPOPT và MPC"
description: Lập lộ trình di chuyển · Đại học · HKI 2026–2027
permalink: /teaching/lap-lo-trinh-di-chuyen/chuong-4/
course_slug: lap-lo-trinh-di-chuyen
chapter_number: 4
lang: vi
---

## Trước khi thực hành

Mở demo và giữ cấu hình gốc cho lần chạy đầu tiên. Bốn phần dùng những mô hình riêng để làm rõ từng ý: ví dụ một bước cho chi phí, bài toán đại số cho SQP, xe đạp phi tuyến cho IPOPT và mô hình ngang tuyến tính cho MPC. Đừng dùng kết quả của mô hình này để kết luận cho mô hình khác.

Phần chi phí, SQP và MPC tính ngay trên trình duyệt. Phần IPOPT **phát lại kết quả đã chạy bằng Python, CasADi và IPOPT**; muốn thay bài toán hoặc giải lại, dùng mã Python trong gói tải về.

## Thực hiện

1. **Chi phí và giới hạn:** giữ trọng số bám 10, trọng số điều khiển 1 và giới hạn gia tốc 0,5 m/s². Nghiệm giới hạn cứng là 0,5 m/s². Chuyển sang phạt mềm với hệ số 10: nghiệm khoảng 0,74074 m/s², vượt 0,24074 m/s². So riêng chi phí và mức vi phạm trước khi nhận xét.
2. **SQP từng bước:** dùng lần lượt khởi tạo 3, −3 và 0, bán kính 1,4. Hai nhánh dừng gần ±1,4 với chi phí 0,886832 và 3,686832. Khởi tạo 0 làm bài toán con tuyến tính hóa không khả thi; giải thích vì sao điều đó chưa chứng minh NLP gốc vô nghiệm.
3. **IPOPT và kiểm chuyển động:** so hai mức biên thêm 0 và 0,05 m. Cả hai lần bộ giải đều báo thành công, nhưng mức đầu có khoảng hở nhỏ nhất khoảng −0,026864 m khi kiểm dày. Mức sau đạt khoảng +0,023919 m tại các mẫu kiểm. Quan sát cả quỹ đạo, các nút và đồ thị khoảng hở.
4. **MPC và chân trời dự báo:** giữ chu kỳ 0,2 s, chạy N=5, 10 và 20 với ngân sách 1200 lượt quét. RMSE của lần chạy đủ 8 s lần lượt khoảng 0,3475; 0,2444 và 0,2653 m. Truy từng chu kỳ để phân biệt lịch sử đã thực hiện với kế hoạch tương lai.
5. **Ngân sách và phản hồi:** với N=5, giảm còn một lượt quét rồi chạy lại. Chu kỳ 11 tại 2,2 s chưa đạt điều kiện nhận, dù phần dư ràng buộc có thể đã nhỏ. Khôi phục 1200 lượt, sau đó dùng N=10 và bật tác động cộng 0,15 m/s tại 2,4 s để quan sát phản hồi. Ghi cả cấu hình và nguyên nhân dừng nếu có.
6. **Trạng thái đầu không đủ khoảng dừng:** bật tùy chọn tương ứng. Từ vị trí 3,4 m và vận tốc ngang 1,3 m/s hướng ra biên 3,5 m, khoảng còn lại chỉ 0,1 m. Ngay cả khi giảm vận tốc bằng gia tốc cực đại 1,5 m/s² tức thì, mô hình cần khoảng 0,5633 m. Tăng số vòng bộ giải không thay đổi khoảng dừng ấy.

## Chạy lại IPOPT

Gói tải về có `python/trajectory_ipopt.py`, phiên bản thư viện, dữ liệu JSON/CSV mẫu và hướng dẫn tạo môi trường Python. Mã đã được kiểm tra bằng Python 3.12. Kết quả chạy lại ghi vào tệp riêng; thời gian và số vòng có thể thay đổi theo môi trường.

Ví dụ xe đạp dùng tâm trục sau, chiều dài cơ sở 2,8 m, 30 khoảng × 0,2 s và tích phân RK4. Vật cản cho điểm theo dõi có tâm (9,0) và bán kính hiệu dụng 1,6 m. Góc dùng radian. Đây chưa phải phép kiểm toàn bộ footprint hình chữ nhật của xe.

## Báo cáo kết quả

Lưu JSON/CSV bằng nút trong demo. Mỗi phép thử cần có cấu hình, giả định, kết quả trước và sau khi đổi một yếu tố, cùng giải thích dựa trên mô hình. Giữ cả lần bị loại hoặc dừng sớm. RMSE luôn phải đi kèm số mốc trạng thái và thời lượng đã chạy; không so lần dừng ở 2,2 s như thể đã hoàn tất 8 s.

Giải thích ba điều: vì sao phạt hữu hạn có thể vượt giới hạn; vì sao kiểm nút chưa đủ để nhận quỹ đạo; và vì sao MPC chỉ áp lệnh đầu rồi giải lại từ trạng thái mới.

## Phạm vi mô hình

Kiểm dày 20 mẫu trên mỗi khoảng của ví dụ IPOPT chưa là chứng chỉ tránh va chạm liên tục. Phần MPC có phép kiểm cực trị chính xác của vị trí trong từng khoảng giữ gia tốc, dựa đúng mô hình tuyến tính đã nêu. Khi nghiệm chưa đạt hoặc trễ hạn, demo dừng mô phỏng và không áp lệnh mới; đây chưa phải một bộ điều khiển dừng xe an toàn.

Các kết quả chưa kiểm chứng xe, cảm biến hoặc khả năng đáp ứng thời gian thực của ROS 2. Thời gian đo trên trang chỉ tính riêng bộ QP, còn phụ thuộc trình duyệt và máy.

## Xem video, đối chiếu với mô hình

Ba video bên dưới gồm hai đoạn ghi từ demo của chương và một đoạn mô phỏng MPCC của ETH. Video IPOPT phát lại nghiệm Python đã tính; video MPC ghi kết quả QP chạy trong trình duyệt. Thời gian phát video có thể khác thời gian của mô hình.

Trong video MPCC, hãy quan sát xe và đường đua. [Repo của Alex Liniger / ETH](https://github.com/alexliniger/MPCC) giải thích cách bản Matlab dùng tìm kiếm để chọn hành lang rồi tối ưu chuyển động. Clip được chuyển từ GIF gốc sang MP4 theo giấy phép Apache-2.0, giữ kích thước và diễn biến gốc. Đây là tư liệu mô phỏng của tác giả.

### Xe tự hành thật

**Stanford MARTY:** quan sát hướng thân xe khi trượt hình số 8, rồi nêu vì sao mô hình không trượt của ví dụ lớp học chưa đủ. Video dùng để thảo luận phạm vi mô hình; không gán bộ điều khiển của MARTY thành MPC. Xem khoảng 00:10–00:35.

<p class="teaching-actions"><a href="https://www.youtube.com/watch?v=nTK56vPb8Zo&amp;t=10s" target="_blank" rel="noopener noreferrer">Xem video Stanford MARTY trên kênh chính thức ↗</a></p>

[Nguồn video: Stanford](https://www.youtube.com/watch?v=nTK56vPb8Zo) · [Mô tả kỹ thuật của Dynamic Design Lab](https://ddl.stanford.edu/people/jonathan-goh).

**AMZ dufour — xe điện tự hành:** xem Trackdrive FSG 2024, khoảng 00:30–00:55, rồi chỉ ra trạng thái, đầu vào và các giới hạn quan trọng khi vào cua. [Mô tả chính thức của AMZ](https://www.amzracing.ch/en/cars/2024) nêu hệ thống dùng ROS 2, camera/LiDAR và NMPC cho xe điện này. Liên hệ bài học với giới hạn lái, lực kéo/phanh và độ bám của ô tô.

<p class="teaching-actions"><a href="https://www.youtube.com/watch?v=X_9zMuQ9sNw&amp;t=30s" target="_blank" rel="noopener noreferrer">Xem xe điện tự hành AMZ dufour tại FSG 2024 ↗</a></p>

[Nguồn video: AMZFormulaStudent](https://www.youtube.com/watch?v=X_9zMuQ9sNw). Theo chú thích của nhóm, cảnh quay bên ngoài thuộc ©FSG media team, ảnh thumbnail ©FSG Schulte. Giữ video nhúng tại kênh gốc.

Các video xe thật là thí nghiệm của nhóm tác giả. Chúng chưa kiểm chứng phần cứng cho demo của lớp. [Nguồn tư liệu và thay đổi định dạng](/assets/teaching/hki-2026-2027/lap-lo-trinh-di-chuyen/chuong-4/MEDIA-SOURCES.md) · [Giấy phép MPCC](/assets/teaching/hki-2026-2027/lap-lo-trinh-di-chuyen/chuong-4/MPCC-LICENSE.txt).

## Ảnh chụp trực tiếp từ demo

Hai ảnh đầu so khoảng hở khi chỉ thay biên tại nút; hai ảnh sau cho thấy cập nhật dự báo và một lần dừng vì chưa giải đạt. Mỗi ảnh tương ứng một cấu hình cụ thể để sinh viên chạy lại và đối chiếu.

![Ảnh chụp kiểm hở với biên thêm 0 m: đường kiểm dày xuống dưới 0](/assets/teaching/hki-2026-2027/lap-lo-trinh-di-chuyen/chuong-4/sim53.png)

![Ảnh chụp kiểm hở với biên thêm 0,05 m: khoảng hở nhỏ nhất dương tại các mẫu kiểm](/assets/teaching/hki-2026-2027/lap-lo-trinh-di-chuyen/chuong-4/sim54.png)

![Ảnh chụp MPC N bằng 10 tại 2,4 giây sau tác động cộng vận tốc ngang](/assets/teaching/hki-2026-2027/lap-lo-trinh-di-chuyen/chuong-4/sim68.png)

![Ảnh chụp MPC N bằng 5, một lượt quét: dự đoán tại chu kỳ 11 chưa được nhận](/assets/teaching/hki-2026-2027/lap-lo-trinh-di-chuyen/chuong-4/sim73.png)

## Đọc thêm

- [MIT Underactuated Robotics — Trajectory Optimization](https://underactuated.mit.edu/trajopt.html)
- [Tài liệu CasADi](https://web.casadi.org/docs/)
- [Tài liệu IPOPT](https://coin-or.github.io/Ipopt/)
- [Rawlings, Mayne và Diehl — Model Predictive Control](https://sites.engineering.ucsb.edu/~jbraw/mpc/MPC-book-2nd-edition-5th-printing.pdf)
