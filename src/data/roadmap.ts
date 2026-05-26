import type { Phase } from '../types/lesson';

export const phases: Phase[] = [
  {
    id: 'phase-1',
    title: 'Phase 1 — AI Literacy',
    description: 'Hiểu AI/LLM hoạt động ở mức đủ dùng, xây dựng tư duy nền tảng vững chắc để giao tiếp với mô hình ngôn ngữ.',
    lessonIds: ['lesson-1', 'lesson-2', 'lesson-3', 'lesson-4', 'lesson-5'],
  },
  {
    id: 'phase-2',
    title: 'Phase 2 — Prompt Engineering',
    description: 'Biết giao việc cho AI rõ ràng, có kiểm soát, xây dựng bộ khung prompt phục vụ cho coding và review.',
    lessonIds: ['lesson-6', 'lesson-7', 'lesson-8', 'lesson-9', 'lesson-10', 'lesson-11', 'lesson-12'],
  },
  {
    id: 'phase-3',
    title: 'Phase 3 — AI-assisted Coding Workflow',
    description: 'Ứng dụng AI để code hiệu quả nhưng vẫn kiểm soát tốt mã nguồn (repo control), giảm thiểu rủi ro sinh code lỗi.',
    lessonIds: ['lesson-13', 'lesson-14', 'lesson-15', 'lesson-16', 'lesson-17', 'lesson-18'],
  },
  {
    id: 'phase-4',
    title: 'Phase 4 — AI Workflow Architect',
    description: 'Thiết kế quy trình làm việc tự động hoặc bán tự động cho AI Agent, điều phối nhiều agent phối hợp.',
    lessonIds: ['lesson-19', 'lesson-20', 'lesson-21', 'lesson-22', 'lesson-23', 'lesson-24', 'lesson-25', 'lesson-26'],
  },
  {
    id: 'phase-5',
    title: 'Phase 5 — AI Product Builder',
    description: 'Tự tay xây dựng sản phẩm hoàn thiện có tích hợp các tính năng AI thực tế và triển khai thực chiến.',
    lessonIds: ['lesson-27', 'lesson-28', 'lesson-29', 'lesson-30', 'lesson-31', 'lesson-32', 'lesson-33'],
  },
];
