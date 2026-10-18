# Nguồn ảnh và video Chương 4

- `ipopt-simulation.mp4`: ghi trực tiếp bằng chức năng ghi hình của demo Chương 4, 1440×1080. Phát lại nghiệm xe đạp động học Python/CasADi/IPOPT, biên thêm tại nút 0,05 m. Không phải video xe thật.
- `mpc-simulation.mp4`: ghi trực tiếp chức năng ghi hình của demo Chương 4, 1440×1080. QP thực tính trong trình duyệt, mô hình ngang tuyến tính, N=10, dt=0,2 s, ngân sách 1200 lượt quét, không thêm tác động. Thời lượng video khác thời gian mô hình 8 s.
- `eth-mpcc-simulation.mp4`: video mô phỏng công bố trong repo Alex Liniger / ETH Automatic Control Lab. Nguồn gốc https://github.com/alexliniger/MPCC/blob/bd331621ba47ae3326711922a863bdb1cdf2d2ea/Images/MPC_sim.gif . Chuyển GIF sang H.264 MP4, giữ kích thước gốc 574×452 và diễn biến 8 s. Repo phát hành Apache-2.0; bản giấy phép đầy đủ ở `licenses/MPCC-LICENSE.txt`. Tư liệu của tác giả, không phải một lần chạy lại do lớp thực hiện.
- Ảnh sim53/sim54/sim68/sim73 trong bài giảng và Teaching: chụp trực tiếp demo Chương 4 tương ứng kiểm hở biên 0, kiểm hở biên 0,05 m, MPC với tác động +0,15 m/s tại 2,4 s, và MPC N=5 chỉ một lượt quét dừng ở chu kỳ 11.

## Video ô tô tự hành thật, chỉ nhúng từ kênh chính thức

- Stanford / Dynamic Design Lab, MARTY figure 8 drift: https://www.youtube.com/watch?v=nTK56vPb8Zo . Video xe thật của Stanford; dùng để bàn về trượt và giới hạn mô hình. Kỹ thuật lập quỹ đạo tối ưu phi tuyến được nhóm mô tả ở https://ddl.stanford.edu/people/jonathan-goh . Không đồng nhất bộ điều khiển MARTY với MPC trong demo.
- AMZFormulaStudent, Winning Autonomous Trackdrive at FSG 2024: https://www.youtube.com/watch?v=X_9zMuQ9sNw . Xe điện tự hành dufour; mô tả hệ ROS 2, camera/LiDAR và NMPC ở https://www.amzracing.ch/en/cars/2024 . Cảnh góc nhìn bên ngoài ©FSG media team, ảnh thumbnail ©FSG Schulte theo chú thích tác giả. Xem trực tiếp trên kênh chính thức.

Video chính thức giữ ở nguồn gốc; Teaching có nút mở video, bài giảng Google Slides nhúng video; gói không sao chép các video YouTube. Các tư liệu thực nghiệm của nhóm tác giả không phải kiểm chứng phần cứng của demo Chương 4.
