export function viData(uid) {
  return {
    name: 'NGUYỄN THỊ NGỌC ÁNH',
    title: 'Manual Tester | Middle',

    sectionTitles: {
      summary: 'Giới Thiệu Bản Thân',
      skills: 'Kỹ Năng Chuyên Môn',
      experience: 'Kinh Nghiệm Làm Việc',
      projects: 'Dự Án',
      education: 'Học Vấn & Chứng Chỉ',
    },

    contacts: [
      { id: uid(), icon: '✉', text: 'ntnanhtester0910@gmail.com' },
      { id: uid(), icon: '🎂', text: '09/10/2001' },
      { id: uid(), icon: '☎', text: '0865838618' },
    ],

    summary:
      'Middle Manual Tester với hơn 3 năm kinh nghiệm thực hiện SIT, UAT và Regression Test trong các dự án Agile Scrum. Có kinh nghiệm làm việc trực tiếp với khách hàng trong nước và quốc tế trong các nhóm từ 12 đến 40 thành viên. Thành thạo quản lý toàn bộ chu trình kiểm thử — từ phân tích yêu cầu, thiết kế test case đến theo dõi lỗi, báo cáo kết quả và chuyển giao kiến thức. Có kinh nghiệm thực tế về kiểm tra cơ sở dữ liệu (DBeaver, SSMS, MySQL Workbench), kiểm thử API (Postman, Swagger) và kiểm thử giao diện (Figma, DevTools).',

    skills: [
      { id: uid(), label: 'Kiểm Thử', value: 'Kiểm thử chức năng, Kiểm thử tích hợp hệ thống (SIT), UAT, Regression Testing, Smoke Testing, Kiểm thử API, Kiểm thử UI/UX' },
      { id: uid(), label: 'Hoạt Động Kiểm Thử', value: 'Test Plan, Thiết kế Test Case, Chuẩn bị dữ liệu kiểm thử, Báo cáo lỗi, Báo cáo kết quả Sprint, Tài liệu chuyển giao kiến thức' },
      { id: uid(), label: 'Công Cụ Quản Lý Kiểm Thử', value: 'Azure DevOps, Jira, Backlog, Redmine' },
      { id: uid(), label: 'Công Cụ API & Cơ Sở Dữ Liệu', value: 'Postman, Swagger, DBeaver, SSMS, MySQL Workbench' },
      { id: uid(), label: 'Công Cụ Kiểm Tra Giao Diện', value: 'Figma, Chrome DevTools, Visbug' },
      { id: uid(), label: 'Viết Test Case', value: 'Excel, Google Sheets' },
      { id: uid(), label: 'Kiểm Thử Tự Động', value: 'Selenium IDE' },
      { id: uid(), label: 'Tài Liệu', value: 'Microsoft Office, Confluence, GitHub' },
    ],

    experience: [
      { id: uid(), title: 'Manual Tester — TDT Asia', date: 'Tháng 12/2024 – Hiện tại' },
      { id: uid(), title: 'Manual Tester — LTS Group', date: 'Tháng 8/2022 – Tháng 12/2024' },
    ],

    projects: [
      {
        id: uid(),
        name: 'IFS Monday — Loan Management System (LMS)',
        date: '',
        team: '',
        client: '',
        tools: '',
        description:
          'Hệ thống dịch vụ tài chính số dành cho khoản vay có tài sản đảm bảo và không có tài sản đảm bảo, tập trung tối ưu quy trình đăng ký khoản vay và đảm bảo tuân thủ các quy định tài chính tại Singapore.',
        respTitle: 'Trách nhiệm',
        responsibilities: [
          { id: uid(), text: 'Phụ trách phạm vi kiểm thử cho module Loan Origination và Repayment: nghiên cứu tài liệu BRD, FSD và tài liệu thiết kế để xác định các yêu cầu cần kiểm thử.' },
          { id: uid(), text: 'Thực hiện đầy đủ các giai đoạn kiểm thử như main flow test, regression test và release test trước khi phát hành; chuẩn bị test data cho UAT và hỗ trợ demo với khách hàng.' },
          { id: uid(), text: 'Thực hiện kiểm tra cơ sở dữ liệu bằng DBeaver để xác thực logic tính toán khoản vay, trạng thái xử lý và tính toàn vẹn dữ liệu giữa các bảng.' },
          { id: uid(), text: 'Thực hiện kiểm thử API bằng Postman để xác minh các endpoint liên quan đến tạo khoản vay, validate parameter và kiểm tra error response trước khi triển khai hệ thống.' },
          { id: uid(), text: 'Lập Sprint Test Result Report sau mỗi chu kỳ sprint.' },
        ],
      },
      {
        id: uid(),
        name: 'Osaka Exchange (OSE)',
        date: '',
        team: '',
        client: '',
        tools: '',
        description: 'Dự án cải tiến UI/UX và phát triển tính năng cho Osaka Exchange — sàn giao dịch tài chính phái sinh tại Nhật Bản.',
        respTitle: 'Trách nhiệm',
        responsibilities: [
          { id: uid(), text: 'Phụ trách kiểm thử màn hình Giao dịch và Lịch sử Giao dịch; tìm hiểu phân tích quy trình nghiệp vụ để đảm bảo phạm vi kiểm thử.' },
          { id: uid(), text: 'Thực hiện kiểm thử tích hợp, hồi quy, rush test, rehearsal trước khi go-live, thực hiện smoke test trước khi go-live.' },
          { id: uid(), text: 'Ghi nhận, theo dõi và xác minh lỗi; tham gia các cuộc họp với khách hàng Nhật hàng tuần để báo cáo tiến độ kiểm thử.' },
          { id: uid(), text: 'Đề xuất cải thiện chiến lược regression test coverage, giúp giảm thiểu lỗi sót trong giai đoạn release cuối.' },
        ],
      },
      {
        id: uid(),
        name: 'Public Procurement System (National eTendering Network — VNPT eProcurement)',
        date: '',
        team: '',
        client: '',
        tools: '',
        description:
          'Hệ thống đấu thầu điện tử quốc gia thuộc Bộ Tài chính Việt Nam, chuyển đổi từ hệ thống cũ chỉ hỗ trợ Internet Explorer sang nền tảng đa trình duyệt hiện đại.',
        respTitle: 'Trách nhiệm',
        responsibilities: [
          { id: uid(), text: 'Phân tích business requirement và nghiên cứu các quy định pháp lý liên quan để xác định phạm vi kiểm thử và acceptance criteria.' },
          { id: uid(), text: 'Thực hiện kiểm thử tính năng đăng ký cho nhà thầu và nhà đầu tư, tính năng đấu thầu điện tử trên đa trình duyệt trên Chrome, Edge và Safari nhằm loại bỏ sự phụ thuộc vào Internet Explorer của phiên bản cũ (2009).' },
          { id: uid(), text: 'Báo cáo defect và cập nhật tiến độ kiểm thử thường xuyên cho Test Leader.' },
          { id: uid(), text: 'Thực hiện kiểm tra các dữ liệu trong DB trên DBeaver.' },
        ],
      },
      {
        id: uid(),
        name: 'Bizbone',
        date: '',
        team: '',
        client: '',
        tools: '',
        description:
          'Giải pháp ERP toàn diện tích hợp phát triển kinh doanh, quản trị, kế toán, quản lý nhân sự, chấm công, quản lý hợp đồng, nhằm tối ưu hóa quy trình và hỗ trợ tiện lợi cho doanh nghiệp.',
        respTitle: 'Trách nhiệm',
        responsibilities: [
          { id: uid(), text: 'Thiết kế và thực hiện Testcase, báo cáo lỗi cho 2 module Phát triển Kinh doanh và Quản trị.' },
          { id: uid(), text: 'Thực hiện kiểm tra cơ sở dữ liệu bằng MySQL Workbench để xác minh tính chính xác của dữ liệu.' },
          { id: uid(), text: 'Bàn giao kiến thức nghiệp vụ cho nhóm khách hàng Mỹ.' },
        ],
      },
      {
        id: uid(),
        name: 'Apollo App (Aeon Mall)',
        date: '',
        team: '',
        client: '',
        tools: '',
        description: 'Ứng dụng mobile tích hợp các phương thức thanh toán của Aeon Mall như tiền mặt, thẻ tín dụng và gift card.',
        respTitle: 'Trách nhiệm',
        responsibilities: [
          { id: uid(), text: 'Kiểm thử Payment Flow và chức năng Gift Card Redemption; sử dụng Figma để đối chiếu UI spec và xác nhận các vấn đề giao diện với khách hàng Nhật Bản.' },
          { id: uid(), text: 'Thiết kế matrix test case chi tiết cho SIT và UAT; thực hiện kiểm thử và ghi nhận kết quả bằng screenshot evidence.' },
          { id: uid(), text: 'Kiểm tra API response bằng Swagger cho các endpoint xử lý thanh toán; xác thực status code và payload structure.' },
          { id: uid(), text: 'Thực hiện kiểm thử cho feature mới, update và hotfix trong các release cycle; tham gia daily standup để cập nhật tiến độ.' },
          { id: uid(), text: 'Sử dụng Chrome DevTools để kiểm tra network request và validate UI rendering trên nhiều kích thước màn hình thiết bị.' },
        ],
      },
      {
        id: uid(),
        name: 'Digitori 360 Digital Solution',
        date: '',
        team: '',
        client: '',
        tools: '',
        description: 'Nền tảng mô hình hóa kiến trúc ứng dụng công nghệ hình ảnh 360°, hỗ trợ tạo bản đồ 3D và trực quan hóa không gian.',
        respTitle: 'Trách nhiệm',
        responsibilities: [
          { id: uid(), text: 'Phụ trách kiểm thử toàn bộ tính năng chính; phân tích requirement và làm rõ nghiệp vụ với BA cùng khách hàng Nhật Bản.' },
          { id: uid(), text: 'Thiết kế và thực thi test case cho tất cả functional requirement; thực hiện smoke test và regression test theo từng build.' },
          { id: uid(), text: 'Verify tính toàn vẹn dữ liệu backend bằng DBeaver và kiểm tra API response thông qua Postman.' },
          { id: uid(), text: 'Review tính nhất quán UI/UX bằng Figma và DevTools nhằm phát hiện các lỗi hiển thị.' },
          { id: uid(), text: 'Xác nhận và quản lý defect từ phía khách hàng; lập Sprint Test Result Report sau mỗi sprint.' },
        ],
      },
      {
        id: uid(),
        name: 'HHLL (ハハロる)',
        date: '',
        team: '',
        client: '',
        tools: '',
        description: 'Mạng xã hội dành cho người dùng Nhật Bản, hỗ trợ kết nối, chia sẻ thông tin và hình ảnh với bạn bè và gia đình.',
        respTitle: 'Trách nhiệm',
        responsibilities: [
          { id: uid(), text: 'Phụ trách kiểm thử toàn bộ module chính; phân tích requirement và xây dựng test case cho các functional scenario.' },
          { id: uid(), text: 'Thực hiện UAT và regression testing theo từng sprint; đảm bảo tính ổn định của feature trong mỗi lần release.' },
          { id: uid(), text: 'Kiểm tra dữ liệu database bằng DBeaver.' },
          { id: uid(), text: 'Kiểm thử social graph API bằng Swagger để xác minh business flow của hệ thống.' },
          { id: uid(), text: 'Làm việc trực tiếp với khách hàng Nhật Bản để trao đổi requirement, làm rõ acceptance criteria và đề xuất cải tiến sản phẩm.' },
          { id: uid(), text: 'Quản lý defect xuyên suốt testing lifecycle; cung cấp reproduction step chi tiết và đánh giá severity cho từng lỗi.' },
        ],
      },
    ],

    education: [
      { id: uid(), name: 'Chứng chỉ ISTQB Foundation Level', detail: 'Cấp tháng 7/2023' },
      { id: uid(), name: 'Năng lực tiếng Nhật — N3', detail: 'Cao đẳng Ngoại ngữ và Công nghệ Việt Nam, 2019–2022' },
      { id: uid(), name: 'Chứng chỉ Kiểm thử Phần mềm', detail: 'Tester Hà Nội, 2022' },
    ],
  }
}
