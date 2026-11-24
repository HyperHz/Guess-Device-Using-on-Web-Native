w<div align="center">

# Device & Display Inspector
### Trình kiểm tra Thiết bị & Màn hình

![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Variables_%26_Grid-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2020%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Dependencies](https://img.shields.io/badge/Dependencies-Zero-16A34A?style=flat-square)
![Privacy](https://img.shields.io/badge/Client--Side-100%25_Offline-2563EB?style=flat-square)
![i18n](https://img.shields.io/badge/Language-EN_%7C_VI-8B5CF6?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-64748B?style=flat-square)

**100% client-side hardware, OS, browser, resolution & pixel density telemetry with transparent accuracy badges.**  
*Công cụ kiểm tra thông số phần cứng, hệ điều hành, trình duyệt, độ phân giải & mật độ điểm ảnh 100% phía máy khách.*
<br>Web demo Native: https://hyperhz.github.io/Guess-Device-Using-on-Web-Native/

[English](#english) • [Tiếng Việt](#tiếng-việt)

</div>

---

## English

### Overview

**Device & Display Inspector** is a lightweight, zero-dependency web application that detects and displays as much hardware, operating system, browser, screen resolution, and pixel density (DPI/PPI) information as modern web standards allow. Every detected metric is paired with an explicit **Accuracy Badge** (`Exact`, `Estimated`, or `Unavailable`) so users can distinguish raw API telemetry from heuristic inferences and browser privacy restrictions.

### Key Features

#### 1. Device, OS & Browser Detection
- **User-Agent Client Hints First (`navigator.userAgentData`)**: Queries high-entropy hints (`model`, `platform`, `platformVersion`, `architecture`, `bitness`, `uaFullVersion`, `fullVersionList`, `wow64`) to accurately identify Windows 11 builds, ARM64/x86 architectures, and Android device models on Chromium-based browsers.
- **Structured Regex Fallback**: Automatically falls back to parsing `navigator.userAgent`, `navigator.platform`, and `navigator.maxTouchPoints` on Safari and Firefox.
- **Platform Edge-Case Handling**:
  - Detects **iPadOS masquerading as macOS** (`MacIntel` paired with `maxTouchPoints > 1`).
  - Matches logical CSS dimensions and `devicePixelRatio` against a built-in Apple lookup table to infer **candidate iPhone / iPad models** (since Safari hides exact model identifiers).
  - Flags Chrome's UA Reduction `"K"` placeholder token on Android.

#### 2. Live Screen & Resolution Metrics
- **Logical vs. Physical Resolution**: Displays `screen.width × screen.height` (CSS pixels) alongside computed physical pixels (`CSS pixels × devicePixelRatio`).
- **Resolution Standard Identification**: Recognizes common display tiers including `HD (720p)`, `Full HD (1080p)`, `QHD / 2K (1440p)`, `4K UHD (2160p)`, `5K Retina`, `8K UHD`, `16:10`, and `UltraWide` formats.
- **Viewport & Available Area**: Live-tracks `window.innerWidth × innerHeight` and `screen.availWidth × availHeight` (excluding OS taskbars and docks).
- **Aspect Ratio & Orientation**: Computes reduced integer aspect ratios via the Euclidean GCD algorithm (e.g., `16:9`, `16:10`) and updates live on window resize or device rotation.

#### 3. Pixel Density (DPI / PPI) & Multi-Monitor Topology
- **Live `devicePixelRatio` Tracking**: Uses dynamic `window.matchMedia('(resolution: ...dppx)')` listeners to update immediately when zooming the page or dragging the browser window across monitors with different DPI scaling.
- **CSS Reference DPI Probe**: Measures a hidden `1in` element to demonstrate the W3C fixed `96 CSS DPI` standard versus true hardware pixel density.
- **Interactive Physical PPI Calculator**: Allows entering any screen diagonal in inches—or selecting common device presets (`6.1"`, `6.7"`, `11"`, `13.3"`, `15.6"`, `27"`)—to calculate physical PPI:
  $$\text{PPI} = \frac{\sqrt{\text{physicalW}^2 + \text{physicalH}^2}}{\text{diagonalInches}}$$
- **Multi-Monitor Inspection (Screen Details API)**: Integrates `window.getScreenDetails()` (with user permission handling) to list all connected displays, primary/internal status, dimensions, DPR, and color depth.

#### 4. Honesty About Privacy Limitations & Export Tools
- **Accuracy Badges**: Clear `Exact`, `Estimated`, and `Unavailable` indicators on every row.
- **Educational Privacy Accordion**: Explains User-Agent reduction/freezing, anti-fingerprinting bucketing, and displays a live raw telemetry JSON snapshot.
- **Bilingual UI (`EN / VI`) & Theme Switcher**: Instant English/Vietnamese switching and `Auto / Light / Dark` theme modes persisted in `localStorage`.
- **JSON Export**: One-click **Copy all as JSON** and **Download report (.json)** with ISO timestamps.

### Project Structure

```text
device-display-inspector/
├── index.html   # Semantic HTML5 markup (no inline CSS or JS)
├── style.css    # CSS custom properties, mobile-first responsive grid & dark mode
├── script.js    # i18n dictionaries, pure detectors, screen/DPI module & event handlers
└── README.md    # Bilingual project documentation
```

### Getting Started

No build tools or package installations are required. Serve the directory with any static HTTP server:

```bash
# Option 1: Python
python3 -m http.server 8080

# Option 2: Node.js
npx serve .
```

Then open `http://localhost:8080` in your browser.

> **Secure Context Note:** `navigator.userAgentData.getHighEntropyValues()` is restricted by browsers to secure contexts (`https://` or `http://localhost`). Opening `index.html` directly via `file://` will automatically fall back to legacy `navigator.userAgent` parsing.

### Architecture (`script.js`)

- **`I18N`**: Complete English and Vietnamese translation dictionaries with dynamic `{placeholder}` interpolation.
- **`CONFIG & LOOKUP TABLES`**: Apple viewport/DPR hardware profiles and display resolution standard definitions.
- **`DETECTORS`**: Pure functions accepting an immutable environment snapshot `env` and returning `{ value, confidence }`.
- **`SCREEN & DPI MODULE`**: Real-time viewport, aspect ratio, DPR watcher, CSS `1in` probe, PPI math, and Screen Details API wrapper.
- **`RENDERERS & EVENT LISTENERS`**: Targeted DOM updates, theme/language persistence, and JSON clipboard/download exporters.

### Known Limitations

- **OS Display Scaling**: `screen.width × devicePixelRatio` reflects the operating system's scaled framebuffer rather than the raw hardware panel matrix when fractional scaling (e.g., 125% or 150% on Windows, or "More Space" on macOS) or browser zoom is active.
- **Anti-Fingerprinting Browsers**: Firefox with `privacy.resistFingerprinting`, Tor Browser, and Brave Shields intentionally bucket or spoof `deviceMemory`, `hardwareConcurrency`, timezone, and viewport dimensions.
- **Screen Details API Support**: `window.getScreenDetails()` is currently limited to desktop Chromium browsers and requires transient user activation (button click) plus permission approval.

---

## Tiếng Việt

### Tổng quan

**Device & Display Inspector (Trình kiểm tra Thiết bị & Màn hình)** là ứng dụng web gọn nhẹ, không phụ thuộc thư viện bên ngoài, giúp phát hiện và hiển thị tối đa thông tin phần cứng, hệ điều hành, trình duyệt, độ phân giải màn hình và mật độ điểm ảnh (DPI/PPI) mà trình duyệt cho phép. Mỗi thông số đều đi kèm **Nhãn độ chính xác** (`Chính xác`, `Ước tính` hoặc `Không khả dụng`) để phân biệt rõ dữ liệu gốc từ API với kết quả suy luận hoặc bị giới hạn quyền riêng tư.

### Tính năng chính

#### 1. Nhận diện Thiết bị, Hệ điều hành & Trình duyệt
- **Ưu tiên User-Agent Client Hints API (`navigator.userAgentData`)**: Truy vấn các tín hiệu entropy cao (`model`, `platform`, `platformVersion`, `architecture`, `bitness`, `uaFullVersion`, `fullVersionList`, `wow64`) để nhận diện chính xác phiên bản Windows 11, kiến trúc ARM64/x86 và tên model thiết bị Android trên các trình duyệt nhân Chromium.
- **Fallback bằng Regex cho Safari & Firefox**: Tự động chuyển sang phân tích `navigator.userAgent`, `navigator.platform` và `navigator.maxTouchPoints` khi trình duyệt không hỗ trợ Client Hints.
- **Xử lý các trường hợp đặc thù**:
  - Nhận diện **iPadOS giả lập macOS** (`MacIntel` kết hợp `maxTouchPoints > 1`).
  - Đối chiếu kích thước logic và `devicePixelRatio` với bảng tra cứu thiết bị Apple để đưa ra **danh sách model iPhone / iPad dự đoán** (do Safari ẩn mã model thật).
  - Phát hiện ký tự rút gọn `"K"` của cơ chế UA Reduction trên Android Chrome.

#### 2. Thông số Màn hình & Độ phân giải (Cập nhật trực tiếp)
- **Độ phân giải logic & vật lý**: Hiển thị `screen.width × screen.height` (CSS pixels) cùng độ phân giải vật lý ước tính (`CSS pixels × devicePixelRatio`).
- **Nhận diện chuẩn hiển thị**: Tự động gọi tên các chuẩn phổ biến như `HD (720p)`, `Full HD (1080p)`, `QHD / 2K (1440p)`, `4K UHD (2160p)`, `5K Retina`, `8K UHD`, `16:10` và `UltraWide`.
- **Vùng hiển thị & Vùng khả dụng**: Theo dõi trực tiếp `window.innerWidth × innerHeight` (Viewport) và `screen.availWidth × availHeight` (không tính thanh tác vụ/Dock của hệ điều hành).
- **Tỷ lệ khung hình & Hướng màn hình**: Rút gọn phân số tối giản bằng thuật toán Euclid (ví dụ: `16:9`, `16:10`) và cập nhật tức thì khi thay đổi kích thước cửa sổ hoặc xoay thiết bị.

#### 3. Mật độ điểm ảnh (DPI / PPI) & Cấu trúc đa màn hình
- **Theo dõi `devicePixelRatio` trực tiếp**: Sử dụng `window.matchMedia('(resolution: ...dppx)')` để cập nhật ngay lập tức khi phóng to/thu nhỏ trang (Zoom) hoặc kéo cửa sổ trình duyệt sang màn hình khác.
- **Mẫu thử CSS Reference DPI**: Đo phần tử ẩn kích thước `1in` để minh họa sự khác biệt giữa chuẩn `96 CSS DPI` cố định của W3C và mật độ điểm ảnh vật lý thực tế.
- **Công cụ tính Physical PPI**: Nhập đường chéo màn hình (inch) hoặc chọn nhanh các kích thước mẫu (`6.1"`, `6.7"`, `11"`, `13.3"`, `15.6"`, `27"`) để tính PPI vật lý theo công thức:
  $$\text{PPI} = \frac{\sqrt{\text{physicalW}^2 + \text{physicalH}^2}}{\text{diagonalInches}}$$
- **Kiểm tra đa màn hình (Screen Details API)**: Tích hợp `window.getScreenDetails()` (có xử lý xin quyền) để liệt kê toàn bộ màn hình đang kết nối, màn hình chính/tích hợp, độ phân giải, DPR và độ sâu màu.

#### 4. Minh bạch giới hạn quyền riêng tư & Xuất báo cáo
- **Nhãn độ chính xác**: Gắn nhãn `Chính xác`, `Ước tính`, `Không khả dụng` cho từng dòng thông số.
- **Mục giải thích quyền riêng tư**: Giải thích cơ chế đóng băng User-Agent, làm tròn chống nhận diện dấu vân tay (Fingerprinting) và hiển thị bản chụp dữ
