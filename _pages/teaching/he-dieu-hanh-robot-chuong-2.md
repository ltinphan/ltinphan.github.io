---
layout: teaching-lab
title: "Chương 2: Log và tên tài nguyên trong ROS 2"
description: Hệ điều hành robot · Đại học
permalink: /teaching/he-dieu-hanh-robot/chuong-2/
course_slug: he-dieu-hanh-robot
chapter_number: 2
lang: vi
---

Môn Hệ điều hành robot (077603), bậc Đại học. Môi trường mẫu: ROS 2 Jazzy, Ubuntu 24.04, Python. Tất cả ví dụ chuyển động chỉ dùng turtlesim. Không chạy các phép thử gửi nhầm lệnh trên robot thật.

## Chuẩn bị trên Ubuntu

Cài ROS 2 Jazzy theo hướng dẫn chính thức trước. Sau đó:

```bash
sudo apt update
sudo apt install ros-jazzy-turtlesim ros-jazzy-rqt-console ros-jazzy-rqt-graph python3-colcon-common-extensions
source /opt/ros/jazzy/setup.bash
mkdir -p ~/robot_os_ch2_ws/src
```

Chép thư mục `src/robot_os_ch2` của gói này vào `~/robot_os_ch2_ws/src/`. Trong gốc workspace:

```bash
cd ~/robot_os_ch2_ws
colcon build --symlink-install --packages-select robot_os_ch2
source install/setup.bash
```

Mỗi terminal mới dùng Bash và nạp:

```bash
source /opt/ros/jazzy/setup.bash
source ~/robot_os_ch2_ws/install/setup.bash
export ROS_DOMAIN_ID=73
export ROS_AUTOMATIC_DISCOVERY_RANGE=LOCALHOST
```

Giảng viên phân miền ROS cho từng nhóm; 73 là ví dụ của gói, không phải quyền bảo mật. LOCALHOST giới hạn discovery trong một máy. Các lệnh apt dành cho Ubuntu, không phải macOS.

## 1. Severity, once và throttle

```bash
ros2 run robot_os_ch2 log_lab --ros-args --log-level INFO
ros2 run robot_os_ch2 log_lab --ros-args --log-level DEBUG
ros2 run robot_os_ch2 log_lab --ros-args --log-level ERROR
```

INFO: không thấy DBG. DEBUG: có DBG. ERROR: chỉ các thông báo mức ERROR và FATAL của ví dụ còn lại. FATAL là thông báo minh họa, không tự thoát: ở INFO/DEBUG vẫn thấy AFTER_FATAL phía sau. 20 lượt đi qua một vị trí `once=True` tạo một dòng ONCE. `throttle_duration_sec=0.5` giới hạn nhịp ghi; không đổi số vòng xử lý. Số dòng có thể dao động theo thời gian thực thi. Trong lần kiểm chứng đi kèm, có 4 dòng THROTTLE.

Thu cả console stdout và stderr:

```bash
ros2 run robot_os_ch2 log_lab --ros-args --log-level DEBUG > run_debug.txt 2>&1
```

Mở `ros2 run rqt_console rqt_console` hoặc `ros2 topic echo /rosout` trước khi tạo sự kiện. Bộ lọc hiển thị không thể phục hồi DEBUG đã bị nguồn lọc. Không mặc định công cụ đọc lại mọi dòng lịch sử. Các đích xuất riêng:

```bash
ros2 run robot_os_ch2 log_lab --ros-args --disable-stdout-logs
ros2 run robot_os_ch2 log_lab --ros-args --disable-rosout-logs
```

Tên `--disable-stdout-logs` tắt console ROS dù console mặc định dùng stderr. Đối chiếu tệp backend bằng `ROS_LOG_DIR`; bản thu shell là loại tệp khác.

## 2. Tự tính và kiểm tra tên

```bash
ros2 run robot_os_ch2 name_probe --ros-args -r __ns:=/r1
ros2 run robot_os_ch2 name_probe --ros-args -r __ns:=/r1 -r __node:=inspector
ros2 run robot_os_ch2 name_probe --unique
```

Với `/r1/probe`: `turtle1/cmd_vel` → `/r1/turtle1/cmd_vel`; `/turtle1/cmd_vel` giữ nguyên; `~/status` → `/r1/probe/status`. Khi đổi tên node thành inspector, private đổi thành `/r1/inspector/status`. Logger dùng `r1.inspector`. Không có khoảng trắng trong các chuỗi tên.

`--unique` là đối số của chương trình mẫu, do Python tạo UUID 8 ký tự; không phải tùy chọn `anonymous=True` của rospy. name_probe chỉ tính/in tên, không tạo publisher cho các topic được liệt kê. Tên private không phải cơ chế bảo mật.

## 3. Hai turtlesim và một driver

Terminal A:

```bash
ros2 run turtlesim turtlesim_node --ros-args -r __ns:=/r1
```

Terminal B:

```bash
ros2 run turtlesim turtlesim_node --ros-args -r __ns:=/r2
```

Terminal C:

```bash
ros2 run robot_os_ch2 scoped_driver --ros-args -r __ns:=/r1
```

Driver có node `/r1/driver`, publisher Twist `/r1/turtle1/cmd_vel`, subscriber Pose `/r1/turtle1/pose` và publisher String `/r1/driver/status`. R1 chuyển động, r2 đứng yên. Driver phát vận tốc trong 60 nhịp 0,1 giây đầu rồi tiếp tục phát lệnh bằng 0. Muốn thử lại, Ctrl+C riêng driver và khởi chạy lại. Trước mỗi tình huống, chờ rùa dừng và khôi phục vị trí nếu cần; không chạy đồng thời nhiều driver.

```bash
ros2 node info /r1/driver
ros2 topic info /r1/turtle1/cmd_vel --verbose
ros2 topic echo /r1/turtle1/pose
```

## 4. Lỗi tên ở gốc

Kết thúc driver lượt trước; giữ hai turtlesim:

```bash
ros2 run robot_os_ch2 scoped_driver --ros-args -r __ns:=/r1 -r turtle1/cmd_vel:=/turtle1/cmd_vel
```

Publisher ở gốc không nối với subscriber của hai mô phỏng trong namespace. Cả hai đứng yên. So endpoint của tên gốc và tên r1. Sửa bằng cách kết thúc lượt lỗi rồi chạy lại cấu hình chuẩn ở mục 3.

## 5. Gửi nhầm sang r2 có chủ ý

```bash
ros2 run robot_os_ch2 scoped_driver --ros-args -r __ns:=/r1 -r turtle1/cmd_vel:=/r2/turtle1/cmd_vel
```

R2 nhận lệnh dù node driver vẫn thuộc /r1. Subscriber Pose của driver vẫn đọc r1: đây là một cấu hình lệch giữa lệnh và trạng thái. Đọc hai endpoint riêng. Không gọi việc rùa nào đó đã chuyển động là bằng chứng mọi cấu hình đều đúng. Sửa bằng cách bỏ remap ngoài ý muốn và chạy lại chuẩn.

## Video và bằng chứng

- `01_relative_r1.mp4`: hai mô phỏng, chỉ driver /r1 phát lệnh theo tên relative.
- `02_global_wrong_then_remap_r2.mp4`: ban đầu tên lệnh ở gốc không có nơi nhận; sau đó remap sang r2. Nửa sau minh họa gửi nhầm r2, không phải cấu hình chuẩn của r1.
- Các video có nhãn r2 bên trái, r1 bên phải theo vị trí của lần ghi mẫu. Trong vận hành, dùng namespace/graph/Pose để định danh, không dùng vị trí cửa sổ.
- `verification.json`: 17 phép kiểm đã qua trong môi trường mô phỏng Ubuntu 24.04 arm64, ROS 2 Jazzy. Không phải kiểm chứng phòng máy hoặc phần cứng của trường.
- `pose.csv`: thời gian tương đối của trình đo, giai đoạn, robot, x, y, vận tốc. Đây là timestamp thu mẫu của trình đo, không tự đồng nhất với timestamp cảm biến.
- Các tệp `logging_*.txt` là bản thu console thật của từng ngưỡng.

## Bài tập

1. Với namespace /lab/r1, node driver: tính `scan`, `/scan`, `~/status`, `turtle1/pose`, `/shared/map`, `~/debug/state`.
2. Đổi tên node thành inspector; nêu hàng nào thay đổi. Đổi namespace; nêu tên nào giữ nguyên.
3. Chọn một trong ba lỗi: DEBUG mất, tên gốc, gửi nhầm r2. Nộp triệu chứng, giả thuyết, lệnh kiểm tra, một thay đổi và kết quả trước/sau.
4. Nộp README có lệnh đầy đủ và cấu hình môi trường, không chỉ ảnh rùa.

## Tài liệu chính thức

- [Cơ chế ghi log trong ROS 2](https://github.com/ros2/ros2_documentation/blob/jazzy/source/Concepts/Intermediate/About-Logging.rst)
- [Cấu hình log và logger](https://github.com/ros2/ros2_documentation/blob/jazzy/source/Tutorials/Demos/Logging-and-logger-configuration.rst)
- [Mã nguồn logger của rclpy](https://github.com/ros2/rclpy/blob/jazzy/rclpy/rclpy/impl/rcutils_logger.py)
- [Quy tắc tên topic và service](https://design.ros2.org/articles/topic_and_service_names.html)
- [Quy tắc static remapping](https://design.ros2.org/articles/static_remapping.html)
- [Đối số dòng lệnh ROS 2](https://design.ros2.org/articles/ros_command_line_arguments.html)

Mã nguồn ví dụ: Apache-2.0. Hình minh họa trong bài giảng tạo bằng ManimGX; ảnh/video mô phỏng được phân biệt với sơ đồ khái niệm.
