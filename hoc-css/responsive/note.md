# Responsive

-   Thiết kế web đáp ứng trên mọi thiết bị
-   Dựa theo kích thước màn hình để thay đổi giao diện
-   Sử dụng css thông qua at-rule @media (Media Queries)

## Breakpoint

-   Điểm dừng tọa độ mà tại đó giao diện được thay đổi
-   Không có breakpoint cố định cho mọi dự án
-   Chỉ có các breakpoint phổ biến

Ví dụ:

-   576px
-   768px
-   992px
-   1200px
-   1400px

## Meta viewport

-   Đảm bảo tỉ lệ của khung nhìn khi chuyển sang các thiết bị kích thước màn hình khác

## Media Queries

```css
@media all|screen|print and (min-width: giatri) and (max-width: giatri) {
    Selector {
        code css
    }
}
```

## Trường phái Responsive

1. Desktop First: đi từ màn hình lớn nhất

```
<= 1399.98px
<= 1199.98px
<= 991.98px
<= 767.98px
<= 575.98px
```

1. Mobile First: đi từ màn hình nhỏ nhất

```
>= 576px
>= 768px
>= 992px
>= 1200px
>= 1400px
```
