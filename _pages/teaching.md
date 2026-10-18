---
layout: page
lang: vi
permalink: /teaching/
title: teaching
description: Các học phần, hướng dẫn và bài thực hành của tôi
nav: true
nav_order: 6
---

<link rel="stylesheet" href="{{ '/assets/css/teaching.css' | relative_url }}">
<div class="teaching" lang="vi">
  <p class="teaching-term">{{ site.data.teaching.semester }} · Trường Đại học Nguyễn Tất Thành</p>
  <p>Chọn học phần để xem hướng dẫn theo chương, chạy thí nghiệm trên trình duyệt hoặc tải mã thực hành. Mỗi bài ghi rõ môi trường cần dùng và phạm vi của mô hình.</p>
  {% for level in (1..2) %}
    {% if level == 1 %}{% assign degree = 'Đại học' %}{% else %}{% assign degree = 'Thạc sĩ' %}{% endif %}
    <section aria-labelledby="degree-{{ level }}">
      <h2 id="degree-{{ level }}">{{ degree }}</h2>
      <div class="teaching-courses">
        {% for course in site.data.teaching.courses %}
          {% if course.level == degree %}
            <article class="teaching-course">
              <h3><a href="{{ '/teaching/' | append: course.slug | append: '/' | relative_url }}">{{ course.title }}</a></h3>
              <p>{{ course.summary }}</p>
              {% if course.labs.size > 0 %}
                <p class="teaching-meta">{{ course.labs.size }} bài thực hành · {{ site.data.teaching.semester }}</p>
              {% else %}
                <p class="teaching-meta">Tài liệu đang được cập nhật</p>
              {% endif %}
            </article>
          {% endif %}
        {% endfor %}
      </div>
    </section>
  {% endfor %}
  <section class="teaching-archive" aria-labelledby="other-courses">
    <h2 id="other-courses">Các học phần khác tôi đã giảng dạy</h2>
    <ul>
      <li>Toán cho khoa học máy tính <span lang="en">(Math for Computer Science)</span></li>
      <li>Trí tuệ nhân tạo <span lang="en">(Introduction to Artificial Intelligence)</span></li>
      <li>Lý thuyết điều khiển tự động <span lang="en">(Control Systems)</span></li>
      <li>Hệ điều hành thời gian thực cho xe tự lái <span lang="en">(Real-time Operating Systems for Autonomous Driving Vehicles)</span></li>
    </ul>
  </section>
</div>
