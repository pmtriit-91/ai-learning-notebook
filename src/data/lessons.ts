import type { Lesson } from '../types/lesson';

export const lessons: Lesson[] = [
  {
    id: 'lesson-1',
    phaseId: 'phase-1',
    lessonNumber: 1,
    title: 'LLM, Token, Context Window và Hallucination',
    description: 'Hiểu 4 khái niệm nền tảng giúp làm việc với AI agent có kiểm soát hơn.',
    estimatedMinutes: 20,
    concepts: ['LLM', 'Token', 'Context Window', 'Hallucination'],
    summary: 'LLM là lõi suy luận/ngôn ngữ, token là đơn vị thông tin, context window là bộ nhớ tạm, hallucination là khi AI đoán sai hoặc bịa nhưng nói như thật.',
    keyTakeaways: [
      'LLM không phải toàn bộ AI agent. Agent = LLM + tools + quyền thao tác + workflow.',
      'Token là đơn vị nhỏ mà model dùng để đọc input và tạo output.',
      'Context window là vùng nhớ tạm chứa các token mà model có thể nhìn thấy trong một lần xử lý.',
      'Context thiếu hoặc nhiễu dễ làm agent hallucinate.',
      'Hallucination là khi AI tạo ra thông tin sai, bịa hoặc chưa được kiểm chứng nhưng trình bày như thể chắc chắn đúng.',
      'Muốn agent sửa code đúng, cần context đủ, scope rõ, constraint chặt, không cho đoán bừa, có report và verify.'
    ],
    examplePrompts: [
      `Sửa lỗi trang quản lý: input trong item con của data xyz đang bị render đúp.\n\nHãy kiểm tra cấu trúc data xyz và logic render trước khi sửa.\n\nYêu cầu:\n1. Chỉ sửa nguyên nhân trực tiếp gây render đúp input.\n2. Không refactor lan man.\n3. Không được đoán field/API/component nếu chưa thấy trong source.\n4. Nếu thiếu dữ liệu, hãy báo rõ cần thêm gì.\n\nReport sau khi sửa:\n1. Đã kiểm tra file nào\n2. Nguyên nhân gây lỗi\n3. Đã sửa gì\n4. Cách verify`
    ],
    exercises: [
      'Phân biệt LLM và AI Agent.',
      'Giải thích vì sao prompt dài chưa chắc tốt.',
      'Giải thích vì sao context quá nhiều có thể làm agent sửa lan man.',
      'Viết một prompt debug tốt có scope, constraint, report và verify.'
    ],
    references: [
      {
        title: 'Google ML Crash Course — Large Language Models',
        url: 'https://developers.google.com/machine-learning/crash-course/llm'
      },
      {
        title: 'OpenAI Prompt Engineering Guide',
        url: 'https://platform.openai.com/docs/guides/prompt-engineering'
      },
      {
        title: 'OpenAI Tokenizer',
        url: 'https://platform.openai.com/tokenizer'
      },
      {
        title: 'Anthropic Context Windows',
        url: 'https://docs.anthropic.com/en/docs/build-with-claude/context-windows'
      },
      {
        title: 'OpenAI — Why Language Models Hallucinate',
        url: 'https://cdn.openai.com/pdf/d04913be-3f6f-4d2b-b283-ff432ef4aaa5/why-language-models-hallucinate.pdf'
      }
    ]
  },
  {
    id: 'lesson-2',
    phaseId: 'phase-1',
    lessonNumber: 2,
    title: 'AI khác Google Search như thế nào',
    description: 'Hiểu khi nào nên hỏi AI, khi nào nên search web, khi nào cần citation, và khi nào AI có thể bịa nếu không có nguồn kiểm chứng.',
    estimatedMinutes: 15,
    concepts: ['AI vs Search', 'Information Retrieval', 'Verification', 'Citation'],
    summary: 'Search engine trỏ đến tài liệu gốc có sẵn; LLM tổng hợp thông tin bằng cách dự đoán từ tiếp theo dựa trên xác suất và có khả năng suy luận/sáng tạo.',
    keyTakeaways: [
      'Search cung cấp nguồn chính xác và link trực tiếp nhưng bắt người dùng tự tổng hợp.',
      'LLM tổng hợp thông tin nhanh nhưng có nguy cơ bịa đặt nếu không có cơ chế RAG (Search tích hợp).',
      'Dùng Search cho dữ liệu thực tế, sự kiện mới, tra cứu API docs gốc. Dùng LLM để phân tích cấu trúc, debug, giải thích logic.'
    ],
    examplePrompts: [
      'So sánh điểm khác biệt giữa cấu trúc của Flexbox và CSS Grid khi nào nên dùng cái nào? Hãy cung cấp link tài liệu MDN chính thức để tôi tự kiểm chứng.'
    ],
    exercises: [
      'Lập bảng so sánh 3 trường hợp nên dùng Search và 3 trường hợp nên dùng LLM.',
      'Giải thích cơ chế RAG (Retrieval-Augmented Generation) giúp giảm hallucination như thế nào.'
    ],
    references: []
  },
  {
    id: 'lesson-3',
    phaseId: 'phase-1',
    lessonNumber: 3,
    title: 'Model, Prompt, System Prompt, Instruction là gì',
    description: 'Phân biệt rõ vai trò của các yếu tố cấu thành một phiên làm việc với AI.',
    estimatedMinutes: 15,
    concepts: ['Model', 'Prompt', 'System Prompt', 'User Prompt'],
    summary: 'System prompt định hình tính cách và giới hạn của mô hình, Prompt là yêu cầu cụ thể của phiên hội thoại, Model là công cụ tính toán xử lý.',
    keyTakeaways: [
      'System Prompt thiết lập "luật chơi" (ví dụ: "Bạn là Senior Engineer... chỉ trả lời code").',
      'User Prompt là yêu cầu giải quyết công việc hiện tại.',
      'Phân biệt rõ ràng giúp thiết lập các agent chuyên biệt hóa.'
    ],
    examplePrompts: [
      'System Prompt: "Bạn là trợ lý giải thích code một cách cực kỳ ngắn gọn, không giải thích dài dòng bằng chữ, chỉ xuất code có comment."'
    ],
    exercises: [
      'Viết một System Prompt biến AI thành một QA Tester chuyên tìm lỗi logic ở các component React.'
    ],
    references: []
  },
  {
    id: 'lesson-4',
    phaseId: 'phase-1',
    lessonNumber: 4,
    title: 'Vì sao AI trả lời sai nhưng vẫn rất tự tin',
    description: 'Khám phá bản chất xác suất của mô hình ngôn ngữ và nguồn gốc của sự tự tin mù quáng.',
    estimatedMinutes: 20,
    concepts: ['Probability Prediction', 'Confidence Score', 'Language Likelihood'],
    summary: 'LLM được huấn luyện để sinh ra văn bản nghe tự nhiên và mạch lạc nhất theo xác suất, chứ không phải để tìm ra sự thật khách quan.',
    keyTakeaways: [
      'AI tối ưu hóa độ trôi chảy ngôn từ, không phải độ chính xác của logic.',
      'Nó không có ý thức về việc "mình không biết", nó chỉ tiếp tục dự đoán token tiếp theo có xác suất cao nhất.',
      'Mối nguy lớn nhất là code lỗi trông rất sạch sẽ và chạy được ở mức cú pháp nhưng sai logic nghiệp vụ.'
    ],
    examplePrompts: [
      'Hãy chỉ ra 3 điểm nghi ngờ lớn nhất trong đoạn code JavaScript sau đây và giải thích vì sao nó có thể gây crash ứng dụng âm thầm.'
    ],
    exercises: [
      'Làm thế nào để phát hiện AI đang "nói dối" trong một đoạn code refactor phức tạp mà không cần chạy code?'
    ],
    references: []
  },
  {
    id: 'lesson-5',
    phaseId: 'phase-1',
    lessonNumber: 5,
    title: 'Cách kiểm chứng output của AI',
    description: 'Xây dựng bộ quy chuẩn để review code và phản hồi do AI sinh ra.',
    estimatedMinutes: 25,
    concepts: ['Verification Workflow', 'Code Review', 'Sandbox Testing'],
    summary: 'Không bao giờ tin tưởng tuyệt đối code của AI. Luôn kiểm chứng qua sandbox, viết test case, và đọc lướt kỹ trước khi git commit.',
    keyTakeaways: [
      'Bắt buộc phải chạy thử code của AI trong môi trường dev/sandbox cô lập.',
      'Yêu cầu AI tự viết các test case (đặc biệt là edge cases) cho chính code nó vừa tạo ra.',
      'Quy tắc vàng: Nếu bạn không hiểu dòng code đó làm gì, đừng đưa nó vào repo.'
    ],
    examplePrompts: [
      'Hãy viết 5 test case sử dụng Jest cho hàm formatCurrency vừa rồi, chú ý các trường hợp input là null, undefined, số âm và chuỗi chữ.'
    ],
    exercises: [
      'Thiết lập một quy trình 3 bước kiểm chứng nhanh code trước khi merge vào nhánh chính.'
    ],
    references: []
  },
  // Phase 2
  {
    id: 'lesson-6',
    phaseId: 'phase-2',
    lessonNumber: 6,
    title: 'Prompt tốt gồm những thành phần nào',
    description: 'Phân tích các thành phần cấu tạo nên một chỉ thị chất lượng cao cho AI.',
    estimatedMinutes: 20,
    concepts: ['Context', 'Target', 'Input Data', 'Output Format'],
    summary: 'Một prompt tối ưu bao gồm: Vai trò (Role), Nhiệm vụ (Goal), Ngữ cảnh (Context), Ràng buộc (Constraint) và Định dạng đầu ra (Output Format).',
    keyTakeaways: [
      'Sự rõ ràng là chìa khóa. AI không đọc được suy nghĩ của bạn, chỉ đọc được token của bạn.',
      'Cấu trúc hóa prompt giúp mô hình phản hồi đúng trọng tâm hơn.'
    ],
    examplePrompts: [
      'Hãy phân tích đoạn prompt sau và chỉ ra các thành phần còn thiếu để biến nó thành prompt chất lượng.'
    ],
    exercises: [
      'Viết một prompt hoàn chỉnh chứa đủ 5 thành phần để yêu cầu AI chuyển đổi một component Class React sang Functional Component.'
    ],
    references: []
  },
  {
    id: 'lesson-7',
    phaseId: 'phase-2',
    lessonNumber: 7,
    title: 'Role, Goal, Context, Constraint, Output Format',
    description: 'Đi sâu vào công thức viết prompt kinh điển cho kỹ sư phần mềm.',
    estimatedMinutes: 20,
    concepts: ['Role Play', 'Constraints', 'Format Specification'],
    summary: 'Công thức 5 thành phần cốt lõi giúp định hình chính xác hướng đi của LLM, giảm thiểu lan man và lạc đề.',
    keyTakeaways: [
      'Role: Giúp AI truy cập đúng vùng tri thức cần thiết.',
      'Constraint: Ngăn chặn AI tự ý sửa code ngoài phạm vi hoặc dùng thư viện ngoài.',
      'Format: Giúp dễ dàng tích hợp đầu ra của AI vào dự án hoặc các script tự động.'
    ],
    examplePrompts: [
      'Role: Senior React Developer\nGoal: Refactor useEffect này\nContext: file App.tsx đính kèm\nConstraint: Không cài thêm dependency, giữ nguyên prop API\nOutput Format: Code diff kèm giải thích tối đa 3 gạch đầu dòng.'
    ],
    exercises: [
      'Tạo một prompt mẫu dựa trên cấu trúc này để làm nhiệm vụ chuyển đổi ngôn ngữ từ API JSON.'
    ],
    references: []
  },
  {
    id: 'lesson-8',
    phaseId: 'phase-2',
    lessonNumber: 8,
    title: 'Prompt debug code',
    description: 'Cách viết prompt để AI khoanh vùng và sửa lỗi nhanh mà không tạo ra lỗi mới.',
    estimatedMinutes: 20,
    concepts: ['Debug Prompts', 'Error Tracing', 'Edge Cases'],
    summary: 'Khi debug, hãy cung cấp stack trace, file chứa lỗi, hành vi thực tế (actual) và mong muốn (expected) cùng các ràng buộc nghiêm ngặt.',
    keyTakeaways: [
      'Đừng chỉ nói "Code này lỗi rồi, sửa đi". Hãy đưa log lỗi chi tiết.',
      'Giới hạn phạm vi sửa của AI để tránh việc nó sửa một chỗ làm hỏng ba chỗ khác.'
    ],
    examplePrompts: [
      'Task: Sửa lỗi ReferenceError: process is not defined ở dòng 23 file config.ts.\nActual: Crash ứng dụng khi chạy build.\nExpected: Fallback an toàn về chuỗi rỗng nếu process không khả dụng.'
    ],
    exercises: [
      'Soạn thảo một prompt debug cho lỗi render vòng lặp vô hạn ở React useEffect.'
    ],
    references: []
  },
  {
    id: 'lesson-9',
    phaseId: 'phase-2',
    lessonNumber: 9,
    title: 'Prompt refactor code',
    description: 'Cách yêu cầu AI tối ưu hóa code sạch hơn, tối ưu hiệu năng mà không làm thay đổi logic.',
    estimatedMinutes: 20,
    concepts: ['Refactoring', 'Clean Code', 'Performance Optimization'],
    summary: 'Tập trung vào tối ưu hóa độ đọc hiểu, giảm độ phức tạp tính toán nhưng phải bảo toàn nguyên vẹn hành vi và các test cases.',
    keyTakeaways: [
      'Yêu cầu AI giải thích lý do refactor trước khi xuất code mới.',
      'Đặt ràng buộc không thay đổi chữ ký hàm (function signature) để tránh phá vỡ code ở các file khác.'
    ],
    examplePrompts: [
      'Hãy refactor hàm xử lý mảng này để tối ưu hóa độ phức tạp từ O(N^2) xuống O(N). Giữ nguyên kiểu dữ liệu đầu vào và đầu ra.'
    ],
    exercises: [
      'Viết prompt yêu cầu AI tối ưu hóa một hàm render nặng bằng cách sử dụng useMemo và useCallback.'
    ],
    references: []
  },
  {
    id: 'lesson-10',
    phaseId: 'phase-2',
    lessonNumber: 10,
    title: 'Prompt review code',
    description: 'Sử dụng AI như một trợ lý reviewer mẫn cán để phát hiện lỗi bảo mật, tối ưu code.',
    estimatedMinutes: 15,
    concepts: ['Code Review', 'Security Audit', 'Coding Standards'],
    summary: 'Cung cấp code diff và yêu cầu AI kiểm tra tính bảo mật, hiệu năng, sự tuân thủ chuẩn code (Clean Code) và các lỗi logic tiềm ẩn.',
    keyTakeaways: [
      'AI rất giỏi tìm các lỗ hổng cơ bản (SQL Injection, XSS, Memory leak).',
      'Review bằng AI giúp giảm tải thời gian cho con người trước khi PR (Pull Request) được tạo.'
    ],
    examplePrompts: [
      'Hãy đóng vai là Senior Security Auditor. Review đoạn code NodeJS xử lý file upload dưới đây và chỉ ra bất kỳ lỗ hổng bảo mật nào.'
    ],
    exercises: [
      'Hãy thử đưa một đoạn code có lỗi rò rỉ bộ nhớ (memory leak) và viết prompt bắt AI review xem nó có nhận diện được không.'
    ],
    references: []
  },
  {
    id: 'lesson-11',
    phaseId: 'phase-2',
    lessonNumber: 11,
    title: 'Prompt chống agent làm lan man',
    description: 'Kiểm soát và giới hạn hành động của các AI agent tự động.',
    estimatedMinutes: 20,
    concepts: ['Agent Control', 'Scope Guard', 'Focus Enforcement'],
    summary: 'Các tác vụ chạy tự động của Agent cần các rào chắn (guardrails) nghiêm ngặt để tránh việc agent tự ý cài đặt thư viện hoặc sửa các file không liên quan.',
    keyTakeaways: [
      'Luôn luôn thiết lập một scope giới hạn các tệp tin được phép chạm vào.',
      'Sử dụng mệnh lệnh phủ định rõ ràng: "Không được tự ý...", "Chỉ sửa trong file..."'
    ],
    examplePrompts: [
      'YÊU CẦU NGHIÊM NGẶT: Chỉ được phép sửa đổi file src/components/Button.tsx. Không được chạm vào bất kỳ file nào khác trong thư mục src/.'
    ],
    exercises: [
      'Thiết lập danh sách 5 điều cấm kỵ (Constraints) phải có trong mọi prompt gửi cho Coding Agent.'
    ],
    references: []
  },
  {
    id: 'lesson-12',
    phaseId: 'phase-2',
    lessonNumber: 12,
    title: 'Xây Prompt Playbook cá nhân',
    description: 'Tổng hợp và lưu trữ các prompt tâm đắc phục vụ công việc hàng ngày.',
    estimatedMinutes: 20,
    concepts: ['Prompt Playbook', 'Productivity', 'Documentation'],
    summary: 'Xây dựng một thư viện các prompt đã được thử nghiệm thành công để tái sử dụng, giúp tăng năng suất và giữ tính ổn định trong công việc.',
    keyTakeaways: [
      'Playbook nên được phân chia theo nhóm rõ ràng.',
      'Nên ghi lại cả ví dụ trước và sau khi sử dụng để dễ so sánh.'
    ],
    examplePrompts: [
      'Tạo cấu trúc một file markdown lưu trữ các prompt hay dùng của bạn.'
    ],
    exercises: [
      'Lựa chọn 3 tác vụ lặp đi lặp lại nhiều nhất của bạn và viết 3 prompt playbook tương ứng.'
    ],
    references: []
  },
  // Phase 3
  {
    id: 'lesson-13',
    phaseId: 'phase-3',
    lessonNumber: 13,
    title: 'Workflow code với AI chuẩn',
    description: 'Quy trình chuẩn hóa khi làm việc cùng AI để đảm bảo chất lượng phần mềm.',
    estimatedMinutes: 25,
    concepts: ['AI Integration', 'Standard Workflow', 'Git Discipline'],
    summary: 'Quy trình khép kín: Phân tích -> Giao việc rõ scope -> Chạy thử -> Tự kiểm chứng -> Review -> Commit.',
    keyTakeaways: [
      'AI là trợ lý, bạn là kiến trúc sư trưởng đưa ra quyết định.',
      'Mỗi thay đổi do AI sinh ra phải được hiểu rõ trước khi merge.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  {
    id: 'lesson-14',
    phaseId: 'phase-3',
    lessonNumber: 14,
    title: 'Chia task cho coding agent',
    description: 'Cách chia nhỏ một tính năng lớn thành các phần việc vừa sức với AI.',
    estimatedMinutes: 20,
    concepts: ['Task Decomposing', 'Subtasks', 'Incremental Coding'],
    summary: 'Chia nhỏ task thành các bước nhỏ, tuần tự. AI làm việc tốt nhất khi giải quyết một vấn đề cụ thể, đơn mục tiêu.',
    keyTakeaways: [
      'Tránh việc yêu cầu AI xây dựng cả một trang web trong một prompt.',
      'Yêu cầu làm từng bước: thiết lập data type -> viết UI -> viết logic xử lý.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  {
    id: 'lesson-15',
    phaseId: 'phase-3',
    lessonNumber: 15,
    title: 'Đọc report của agent',
    description: 'Phân tích kết quả thực hiện và báo cáo của AI agent.',
    estimatedMinutes: 15,
    concepts: ['Report Parsing', 'Change Logs', 'Validation Verification'],
    summary: 'Yêu cầu agent viết báo cáo thay đổi rõ ràng. Kiểm tra xem agent đã sửa những file nào, lý do và cách test.',
    keyTakeaways: [
      'Luôn đối chiếu danh sách file agent báo cáo đã sửa với git diff thực tế.',
      'Chú ý các file agent tự ý thay đổi ngoài luồng.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  {
    id: 'lesson-16',
    phaseId: 'phase-3',
    lessonNumber: 16,
    title: 'Scope control — giới hạn phạm vi sửa',
    description: 'Bảo vệ mã nguồn dự án khỏi sự tàn phá của việc tự ý refactor lan rộng.',
    estimatedMinutes: 20,
    concepts: ['Scope Lock', 'System Safety', 'Directory Boundary'],
    summary: 'Đặt luật nghiêm ngặt cấm chỉnh sửa bất kỳ tệp tin nào nằm ngoài danh sách được chỉ định sẵn.',
    keyTakeaways: [
      'Sử dụng các công cụ cấu hình hoặc file định cấu hình của agent để giới hạn quyền ghi.',
      'Sử dụng các câu lệnh phủ định mạnh trong prompt.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  {
    id: 'lesson-17',
    phaseId: 'phase-3',
    lessonNumber: 17,
    title: 'Rollback, checkpoint, git discipline',
    description: 'Quản lý phiên bản và an toàn repo khi sử dụng AI.',
    estimatedMinutes: 20,
    concepts: ['Git Branching', 'Commit Strategy', 'Rollback Mechanism'],
    summary: 'Tạo checkpoint bằng Git trước khi cho phép AI chạy các lệnh chỉnh sửa tự động. Dễ dàng khôi phục khi AI đi sai hướng.',
    keyTakeaways: [
      'Nên tạo một nhánh (branch) riêng khi làm việc với AI.',
      'Commit thường xuyên với các tin nhắn mô tả rõ ràng để dễ rollback.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  {
    id: 'lesson-18',
    phaseId: 'phase-3',
    lessonNumber: 18,
    title: 'Test UI, verify result, commit',
    description: 'Hoàn thiện quy trình làm việc chuẩn hóa và đẩy code lên kho lưu trữ.',
    estimatedMinutes: 25,
    concepts: ['UI Testing', 'Visual Verification', 'Final Review'],
    summary: 'Chạy ứng dụng trực tiếp, kiểm tra hiển thị trên thiết bị di động, kiểm tra các tương tác click chuột và bàn phím trước khi commit chính thức.',
    keyTakeaways: [
      'Không dựa hoàn toàn vào việc test tự động của agent.',
      'Sử dụng mắt thường và tay click trực tiếp để kiểm chứng trải nghiệm người dùng.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  // Phase 4
  {
    id: 'lesson-19',
    phaseId: 'phase-4',
    lessonNumber: 19,
    title: 'Agent là gì',
    description: 'Tìm hiểu về định nghĩa AI Agent và sự khác biệt của nó so với mô hình Chat cơ bản.',
    estimatedMinutes: 20,
    concepts: ['AI Agent', 'Autonomy', 'Execution Loop'],
    summary: 'Agent là hệ thống phần mềm sử dụng LLM làm hạt nhân tư duy, có khả năng tự động lập kế hoạch, sử dụng các công cụ ngoài và thực thi hành động để đạt mục tiêu.',
    keyTakeaways: [
      'LLM chỉ suy nghĩ, Agent còn hành động.',
      'Vòng lặp cơ bản: Perceive (Nhận thức) -> Plan (Lập kế hoạch) -> Act (Hành động).'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  {
    id: 'lesson-20',
    phaseId: 'phase-4',
    lessonNumber: 20,
    title: 'Tool use là gì',
    description: 'Cơ chế giúp AI gọi API, thực thi code và đọc ghi file.',
    estimatedMinutes: 20,
    concepts: ['Function Calling', 'External Tools', 'API Integration'],
    summary: 'Mô tả các hàm của hệ thống cho LLM dưới dạng schema, LLM sẽ quyết định khi nào cần gọi hàm nào và truyền tham số gì.',
    keyTakeaways: [
      'Tool use mở rộng khả năng của AI đến vô hạn (truy cập internet, chạy command, gọi DB).',
      'Cần kiểm soát bảo mật chặt chẽ khi cấp quyền gọi tool cho AI.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  {
    id: 'lesson-21',
    phaseId: 'phase-4',
    lessonNumber: 21,
    title: 'Context engineering',
    description: 'Quản lý, chắt lọc và tối ưu hóa bộ nhớ tạm của Agent.',
    estimatedMinutes: 25,
    concepts: ['Context Truncation', 'Token Saving', 'Relevant Retrieval'],
    summary: 'Kỹ thuật chọn lọc thông tin quan trọng nhất để đưa vào context window, tránh vượt giới hạn token và giảm nhiễu thông tin cho LLM.',
    keyTakeaways: [
      'Không đưa toàn bộ database hay codebase vào prompt.',
      'Sử dụng các thuật toán tìm kiếm tương đồng (Vector Search) để chỉ lấy các đoạn code cần thiết.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  {
    id: 'lesson-22',
    phaseId: 'phase-4',
    lessonNumber: 22,
    title: 'Memory, session, observation, replay',
    description: 'Cách thiết lập bộ nhớ dài hạn và ngắn hạn cho AI Agent.',
    estimatedMinutes: 25,
    concepts: ['Short-term Memory', 'Long-term Memory', 'Session State'],
    summary: 'Thiết lập các cơ chế lưu trữ lịch sử chat, các quan sát (observations) sau mỗi hành động và cho phép Agent phát lại (replay) các bước đi để tự sửa lỗi.',
    keyTakeaways: [
      'Memory giúp Agent duy trì trạng thái nhất quán qua các lượt hội thoại dài.',
      'Replay giúp phân tích các quyết định sai lầm của Agent để tối ưu quy trình.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  {
    id: 'lesson-23',
    phaseId: 'phase-4',
    lessonNumber: 23,
    title: 'Human-in-the-loop',
    description: 'Tương tác giữa người và máy trong các quy trình tự động hóa phức tạp.',
    estimatedMinutes: 20,
    concepts: ['HITL Pattern', 'Approval Gate', 'User Intervention'],
    summary: 'Thiết kế các cổng phê duyệt (approval gates) để con người kiểm tra và bấm nút cho phép AI thực thi các lệnh nguy hiểm (ví dụ: chạy lệnh shell, deploy sản phẩm).',
    keyTakeaways: [
      'Không để AI tự quyết định 100% trong các hệ thống quan trọng.',
      'Tương tác con người là chốt chặn cuối cùng ngăn ngừa thảm họa bảo mật.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  {
    id: 'lesson-24',
    phaseId: 'phase-4',
    lessonNumber: 24,
    title: 'Multi-agent workflow',
    description: 'Thiết kế hệ thống có nhiều Agent chuyên biệt cùng phối hợp làm việc.',
    estimatedMinutes: 25,
    concepts: ['Multi-agent', 'Role Division', 'Communication Protocols'],
    summary: 'Chia nhỏ bài toán lớn và giao cho các agent chuyên môn hóa (ví dụ: Agent thiết kế, Agent viết code, Agent kiểm thử) giao tiếp với nhau.',
    keyTakeaways: [
      'Hiệu quả hơn so với việc bắt một Agent duy nhất làm tất cả mọi việc.',
      'Yêu cầu giao thức truyền tin rõ ràng giữa các Agent.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  {
    id: 'lesson-25',
    phaseId: 'phase-4',
    lessonNumber: 25,
    title: 'Project Manager AI điều phối Coding Agent',
    description: 'Mô hình quản lý công việc phần mềm bằng AI.',
    estimatedMinutes: 25,
    concepts: ['PM Agent', 'Coordination', 'Sprint Planning'],
    summary: 'Agent PM tiếp nhận yêu cầu từ người dùng, lên kế hoạch (plan), chia nhỏ task và giám sát, phân công cho Coding Agent thực hiện.',
    keyTakeaways: [
      'Tự động hóa một phần quy trình quản lý dự án.',
      'Đảm bảo các Coding Agent làm việc đúng mục tiêu và tiến độ.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  {
    id: 'lesson-26',
    phaseId: 'phase-4',
    lessonNumber: 26,
    title: 'Agent governance — quản trị AI agent',
    description: 'Đảm bảo an toàn, bảo mật và tính tuân thủ pháp lý của các AI Agent.',
    estimatedMinutes: 20,
    concepts: ['Governance', 'Safety Guards', 'Access Control'],
    summary: 'Thiết lập các bộ luật về an toàn thông tin, kiểm soát chi phí (token cost), giới hạn API rate limits và phân quyền truy cập cho Agent.',
    keyTakeaways: [
      'Quản trị chặt chẽ để tránh việc Agent tiêu tốn hàng nghìn USD tiền API vô ích.',
      'Đảm bảo Agent không ghi đè dữ liệu sản xuất hoặc làm lộ thông tin khách hàng.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  // Phase 5
  {
    id: 'lesson-27',
    phaseId: 'phase-5',
    lessonNumber: 27,
    title: 'AI feature trong sản phẩm là gì',
    description: 'Cách đưa các tính năng AI thông minh vào ứng dụng thực tế để nâng cao trải nghiệm.',
    estimatedMinutes: 20,
    concepts: ['AI Features', 'UX/UI Integration', 'AI Value Proposition'],
    summary: 'Các tính năng sử dụng trí tuệ nhân tạo như gợi ý nội dung, dịch thuật tự động, tìm kiếm thông minh, tự động điền form.',
    keyTakeaways: [
      'AI Feature phải giải quyết nỗi đau thực tế của người dùng, không chỉ là công nghệ trưng bày.',
      'Cần xử lý tốt độ trễ (latency) khi gọi API của AI.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  {
    id: 'lesson-28',
    phaseId: 'phase-5',
    lessonNumber: 28,
    title: 'Chatbot, assistant, RAG, automation khác nhau thế nào',
    description: 'Phân biệt 4 mô hình ứng dụng AI phổ biến trong các dự án.',
    estimatedMinutes: 25,
    concepts: ['RAG Architecture', 'Workflow Automation', 'Chatbot UX'],
    summary: 'Chatbot: giao tiếp dạng hội thoại; Assistant: có khả năng gọi tool hỗ trợ; RAG: tìm kiếm truy xuất dữ liệu nội bộ; Automation: tự động hóa quy trình chạy ngầm.',
    keyTakeaways: [
      'RAG là công nghệ bắt buộc nếu muốn AI trả lời chính xác thông tin nội bộ của công ty.',
      'Automation giúp thay thế các tác vụ lặp đi lặp lại của con người.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  {
    id: 'lesson-29',
    phaseId: 'phase-5',
    lessonNumber: 29,
    title: 'Thiết kế mini AI product',
    description: 'Lên ý tưởng, wireframe và sơ đồ luồng dữ liệu cho một sản phẩm AI quy mô nhỏ.',
    estimatedMinutes: 25,
    concepts: ['Product Design', 'Information Flow', 'Mini MVP'],
    summary: 'Xác định rõ Persona người dùng, tính năng cốt lõi (MVP), luồng dữ liệu đi từ frontend qua AI backend và phản hồi lại người dùng.',
    keyTakeaways: [
      'Tập trung vào một tính năng độc bản làm tốt nhất.',
      'Thiết kế giao diện tối giản để tập trung vào giá trị mà AI mang lại.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  {
    id: 'lesson-30',
    phaseId: 'phase-5',
    lessonNumber: 30,
    title: 'AI Car Showcase Assistant',
    description: 'Nghiên cứu case study thực tế về một trợ lý AI tư vấn và giới thiệu ô tô.',
    estimatedMinutes: 30,
    concepts: ['Domain Assistant', 'E-commerce AI', 'Product Recommendation'],
    summary: 'Xây dựng một chatbot chuyên sâu tư vấn xe hơi dựa trên ngân sách, nhu cầu gia đình, sở thích cá nhân và so sánh thông số kỹ thuật xe.',
    keyTakeaways: [
      'Cần cấu trúc dữ liệu xe hơi chi tiết để RAG hoạt động hiệu quả.',
      'Thiết kế tính cách thương hiệu cho trợ lý xe hơi.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  {
    id: 'lesson-31',
    phaseId: 'phase-5',
    lessonNumber: 31,
    title: 'Tích hợp AI vào web app',
    description: 'Cách gọi các API của OpenAI, Anthropic từ frontend hoặc backend của web app.',
    estimatedMinutes: 25,
    concepts: ['API Integration', 'Streaming Responses', 'Error Handling'],
    summary: 'Sử dụng SDK chính thức, quản lý các khóa bảo mật (API keys) an toàn ở backend và xử lý hiển thị dữ liệu dạng streaming (chữ chạy dần giống ChatGPT).',
    keyTakeaways: [
      'Không bao giờ để lộ API Key ở phía Client/Frontend.',
      'Sử dụng serverless function hoặc proxy API để bảo vệ key.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  {
    id: 'lesson-32',
    phaseId: 'phase-5',
    lessonNumber: 32,
    title: 'Deploy, test, cải tiến',
    description: 'Đưa sản phẩm AI lên môi trường production và theo dõi phản hồi.',
    estimatedMinutes: 25,
    concepts: ['Hosting Deployment', 'A/B Testing', 'Prompt Iteration'],
    summary: 'Deploy frontend lên Vercel/Netlify, deploy backend lên Render/Fly.io. Theo dõi nhật ký sử dụng của người dùng để cải tiến prompt.',
    keyTakeaways: [
      'Theo dõi các câu trả lời sai của AI để điều chỉnh System Prompt.',
      'Tối ưu hóa chi phí API và cải thiện tốc độ phản hồi.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  },
  {
    id: 'lesson-33',
    phaseId: 'phase-5',
    lessonNumber: 33,
    title: 'Tổng kết: từ người dùng AI thành AI Product Builder',
    description: 'Đánh giá lại hành trình học tập và định hình tương lai trong kỷ nguyên AI.',
    estimatedMinutes: 30,
    concepts: ['AI Builder Mindset', 'Future Roadmap', 'Continuous Learning'],
    summary: 'Nhìn nhận lại toàn bộ lộ trình từ việc hiểu cơ chế LLM cơ bản đến khả năng tự kiến trúc một sản phẩm phần mềm có tích hợp trí tuệ nhân tạo.',
    keyTakeaways: [
      'Sự khác biệt lớn nhất là tư duy kiến tạo sản phẩm giải quyết vấn đề.',
      'Liên tục cập nhật kiến thức vì thế giới AI thay đổi từng tuần.'
    ],
    examplePrompts: [],
    exercises: [],
    references: []
  }
];
