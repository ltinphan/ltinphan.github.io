---
layout: teaching-lab
title: "Chương 1: Node, topic và giao tiếp trong ROS 2"
description: Hệ điều hành robot · Đại học
permalink: /teaching/he-dieu-hanh-robot/chuong-1/
course_slug: he-dieu-hanh-robot
chapter_number: 1
lang: vi
---

Môi trường chuẩn: Ubuntu 24.04, ROS 2 Jazzy, Python 3.12. Đây là demo turtlesim cho lớp học, không điều khiển robot thật. Code của bài giảng cung cấp dưới giấy phép Apache-2.0. ROS, turtlesim và các thư viện giữ giấy phép riêng của chúng.

## Chuẩn bị một lần

Cài ROS 2 Jazzy theo hướng dẫn chính thức: [Cài đặt ROS 2 Jazzy trên Ubuntu](https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html). Trên máy Ubuntu đã có ROS 2 Jazzy:

```bash
sudo apt update
sudo apt install ros-jazzy-turtlesim ros-jazzy-rqt-graph ros-jazzy-rqt-console python3-colcon-common-extensions
```

Giải nén gói này thành thư mục `~/robot_os_ws`, để bên trong có `src/robot_os_ch1`. Các lệnh sau chạy bằng Bash. Không chạy các lệnh apt trên macOS. Trên macOS/Windows, dùng máy Ubuntu, máy ảo hoặc container đã chuẩn bị.

```bash
source /opt/ros/jazzy/setup.bash
cd ~/robot_os_ws
colcon build --symlink-install --packages-select robot_os_ch1
source install/setup.bash
```

Trong **mỗi terminal mới**, nạp ROS và workspace, rồi dùng cùng một miền cho các chương trình của nhóm:

```bash
source /opt/ros/jazzy/setup.bash
source ~/robot_os_ws/install/setup.bash
export ROS_DOMAIN_ID=63
export ROS_AUTOMATIC_DISCOVERY_RANGE=LOCALHOST
```

Giá trị 63 chỉ là miền dùng cho ví dụ. Giảng viên phân miền cho từng nhóm, thống nhất mọi terminal trong nhóm. ROS_AUTOMATIC_DISCOVERY_RANGE=LOCALHOST giới hạn buổi nhập môn ở một máy. Đây không phải cơ chế phân quyền bảo mật.

## Demo 1: Chạy đúng và quan sát

Terminal A:

```bash
ros2 run turtlesim turtlesim_node
```

Terminal B:

```bash
ros2 run robot_os_ch1 circle_driver
```

Terminal C:

```bash
ros2 run robot_os_ch1 pose_watcher
```

Driver phát Twist 10 Hz, với linear.x=1.0 và angular.z=0.6 trong 100 nhịp đầu. Từ nhịp tiếp theo, driver tiếp tục phát Twist bằng 0. Thời gian chuyển khoảng 10 giây, phụ thuộc lịch thực thi. Khởi động lại driver để chạy lại. PoseWatcher nhận pose và chỉ in log sau mỗi 60 bản tin để dễ đọc. Tần số log khác tần số nhận pose.

Các công cụ quan sát, chạy ở terminal khác đã nạp cùng môi trường:

```bash
ros2 node list
ros2 node info /circle_driver
ros2 topic list -t
ros2 topic info /turtle1/cmd_vel --verbose
ros2 topic echo /turtle1/cmd_vel
ros2 topic echo /turtle1/pose --once
ros2 topic hz /turtle1/pose
ros2 interface show geometry_msgs/msg/Twist
ros2 run rqt_graph rqt_graph
```

Lệnh echo và hz cũng tham gia graph. Rqt_graph có bộ lọc ẩn các node công cụ. Một đường nối biểu diễn quan hệ giao tiếp, không tự chứng minh nội dung, tần số hay độ trễ đạt yêu cầu.

## Demo 2: Tên topic bị sai

Dừng driver ở terminal B bằng Ctrl+C. Khởi động lại với lỗi đánh máy có chủ ý:

```bash
ros2 run robot_os_ch1 circle_driver --ros-args -r /turtle1/cmd_vel:=/turtle1/cmd_vell
```

Rùa không nhận lệnh từ driver này. Dùng node info và topic list -t để tìm tên khác nhau. Dừng chương trình sai, rồi chạy lại lệnh đúng ở Demo 1. Chỉ thay một yếu tố giữa hai lần chạy.

## Demo 3: Cùng tên, khác kiểu

Dừng driver trước khi chạy lỗi sau:

```bash
ros2 run robot_os_ch1 type_mismatch
```

Chương trình phát std_msgs/msg/String lên tên /turtle1/cmd_vel, trong khi turtlesim nhận geometry_msgs/msg/Twist. Kiểm tra bằng topic list -t hoặc topic info --verbose. Nếu echo báo tên topic có nhiều kiểu, chỉ rõ kiểu ở cuối lệnh. Dừng chương trình sai trước khi chạy lại driver đúng.

## Demo 4: Khác miền

Giữ turtlesim ở miền 63. Mở terminal mới, nạp môi trường rồi đặt miền khác:

```bash
export ROS_DOMAIN_ID=64
ros2 run robot_os_ch1 circle_driver
```

Đối chiếu node list ở hai terminal. Hai chương trình không tự tìm thấy nhau qua discovery chuẩn khi ở hai miền khác nhau. Dừng chương trình ở miền 64. Đặt lại miền 63 và chạy driver. Nếu danh sách CLI có vẻ cũ, dùng ros2 node list --no-daemon để đối chiếu trực tiếp hoặc dừng daemon trong đúng môi trường đang kiểm tra.

## Demo 5: Publisher ngừng hoạt động

Chạy driver đúng, sau vài giây bấm Ctrl+C. Quan sát cmd_vel, pose và chuyển động. Turtlesim Jazzy có timeout lệnh khoảng một giây. Pose vẫn được turtlesim phát khi rùa đã đứng yên. Đây là hành vi của turtlesim, không phải bảo đảm dừng an toàn của mọi robot.

Để gửi lệnh 0 trong ví dụ:

```bash
ros2 topic pub --once /turtle1/cmd_vel geometry_msgs/msg/Twist '{}'
```

## Sản phẩm sinh viên nộp

Nộp package, README lệnh chạy, graph, một mẫu message và bảng trước/sau sửa lỗi. Ghi hệ điều hành, distro, ROS_DOMAIN_ID và tên lỗi đã tạo. Ảnh và video trong gói là tư liệu minh họa của giảng viên, không thay bằng chứng sinh viên tự chạy.

## Nguồn

- Đề cương môn 077603, Chương 1 trong thư mục học phần.
- [Làm quen với turtlesim](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Introducing-Turtlesim/Introducing-Turtlesim.html)
- [Topic trong ROS 2](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Topics/Understanding-ROS2-Topics.html)
- [Viết publisher và subscriber bằng Python](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Py-Publisher-And-Subscriber.html)
- Nếu trang tài liệu bị chặn: bản nguồn chính thức ở [Mã nguồn tài liệu ROS 2 Jazzy](https://github.com/ros2/ros2_documentation/tree/jazzy/source).
