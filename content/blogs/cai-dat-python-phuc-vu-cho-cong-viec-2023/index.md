---
title: "Cài đặt Python phục vụ cho công việc"
author: "Thịnh Nguyễn"
description: "Hướng dẫn cách cài đặt Python theo kinh nghiệm của mình, giúp các bạn có thể học và làm việc 
  dễ dàng với Python"
date: "2023-07-31T21:58:52+07:00"
thumbnail: "img/thumbnail.png"
categories: [ "Lập trình" ]
tags: [ "lập trình python", "cài đặt python", "python cho công việc" ]
draft: false
---

Thông thường, khi mới bắt đầu học Python, các bạn thường hay download và cài đặt Python từ
[trang chủ](https://www.python.org/).

Với cách tiếp cận này, có thể giúp các bạn nhanh chóng cài đặt và chạy code Python nhanh chóng. Đối với những bạn
bước đầu làm quen với Python thì cách này là dễ dàng và nhanh nhất.

Tuy nhiên, khi làm việc nhiều với Python, nhất là khi chuyển qua lại những project cần sử dụng những version khác nhau
thì đến lúc bạn cần tìm hướng đi mới.

Và sau khi tìm kiếm, mình đã thấy được chân ái của mình, đó chính là
[Miniconda](https://docs.conda.io/en/latest/miniconda.html). Đây là một phần nhỏ của một dự án lớn hơn
[Conda](https://docs.conda.io/en/latest/index.html) hay đầy đủ là [Anaconda](https://www.anaconda.com/).

{{<figure src="img/anaconda.png" cap="Anaconda">}}

Theo [Wikipedia](https://en.wikipedia.org/wiki/Eunectes), Anaconda là một loài trăn khổng lồ ở Nam Mỹ, một cách đặt tên
khá là thú vị khi ngôn ngữ Python có nghĩa là con trăn.

Điểm khác biệt cơ bản giữa Miniconda và Conda là Conda sẽ cài đặt sẵn những thư viện về data như là SciPy, NumPy,
Jupyter,... Nếu các bạn chỉ đang muốn tập trung làm về application hay webapp thì chỉ cần cài Miniconda là đủ dùng rồi.
Những thư viện về data nếu muốn có thể cài đặt thêm sau này.

## Cài đặt Miniconda

Các bạn có thể download và cài đặt tại trang [Miniconda](https://docs.conda.io/en/latest/miniconda.html) tùy theo
hệ điều hành Windows, Linux hoặc macOS.

Sau khi cài xong, các bạn sử dụng lệnh sau để cập nhật thư viện:

```cmd
 conda update --all
```

Python sẽ được cài đặt kèm theo với phiên bản tương ứng như trên website Miniconda mà bạn tải về. Bạn có thể dễ dàng
kiểm tra Python version như sau:

```cmd
python -V
```

## Thiết lập môi trường

### Môi trường Python mặc định

Nghĩa là bạn muốn tạo môi trường ảo có version giống với version Python đi kèm theo bản cài Miniconda.

Ví dụ: bạn đang cài Python 3.11 và muốn tạo môi trường ảo cũng dùng Python 3.11

```cmd
python -m venv venv
```

Sau khi chạy câu lệnh trên, sẽ tạo một thư mục `venv`, chứa những file cần thiết để giúp bạn sử dụng môi trường ảo.
Để kích hoạt môi trường này, bạn cần chạy lệnh dưới:

```cmd
.\venv\Scripts\activate.bat
```

Để thoát khỏi môi trường ảo này, bạn dùng lệnh:

```cmd
deactivate
```

{{<figure src="img/venv.png" cap="Tạo môi trường ảo Python mặc định">}}

### Môi trường Python tùy chỉnh

Đến khi bạn muốn sử dụng Python khác version mặc định, thì đây là lúc Miniconda phát huy tác dụng.

Ví dụ: bạn đang cài Python 3.11 nhưng muốn dùng Python 3.7

```cmd
conda create --name py37 python=3.7
```

Với `--name` là tên mà bạn muốn đặt, kèm theo version của Python.

Để kích hoạt, chạy lệnh:

```cmd
conda activate py37
```

Hủy kích hoạt:

```cmd
conda deactivate
```

{{<figure src="img/conda-py37.png" cap="Tạo môi trường ảo Python bằng Conda">}}

Để kiểm tra tất cả môi trường ảo được tạo bởi Miniconda, bạn dùng lệnh:

```cmd
conda env list
```

Và nếu muốn xóa một môi trường cụ thể, ví dụ là `py37` được tạo ở trên:

```cmd
conda remove --name py37
```

Chi tiết bạn có thể tham khảo
thêm [tại đây](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html).

### Môi trường Python lồng nhau

Một ví dụ khác cũng khá hay là nếu bạn muốn tạo môi trường ảo Python được tạo bởi Miniconda thì làm như thế nào?

Giải pháp cũng khá đơn giản thôi, đầu tiên bạn tạo môi trường ảo bằng Miniconda, kích hoạt nó lên và dùng như
môi trường mặc định:

```cmd
conda create --name py37 python=3.7
conda activate py37
python -m venv venv
.\venv\Scripts\activate.bat
```

Kết quả sẽ tương tự như sau:

{{<figure src="img/conda-venv.png" cap="Tạo môi trường ảo Python lồng nhau">}}

---

Theo trên là những chia sẻ cơ bản của mình khi làm việc với Python. Với Miniconda, giúp mình có thể lập trình với nhiều
version Python khác nhau thuận tiện hơn.

Nếu bạn có ý tưởng nào hữu ích, có thể chia sẻ thêm ở phần bình luận bên dưới.
