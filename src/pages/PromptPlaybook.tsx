import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab, Card, CardContent } from '@mui/material';
import { PromptBlock } from '../components/PromptBlock';
import BugReportIcon from '@mui/icons-material/BugReport';
import CodeIcon from '@mui/icons-material/Code';
import RateReviewIcon from '@mui/icons-material/RateReview';
import SecurityIcon from '@mui/icons-material/Security';
import AssignmentIcon from '@mui/icons-material/Assignment';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`playbook-tabpanel-${index}`}
      aria-labelledby={`playbook-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export const PromptPlaybook: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const playbooks = [
    {
      category: 'Debug Prompt',
      icon: <BugReportIcon />,
      prompts: [
        {
          title: 'Prompt Debug lỗi Runtime/UI cụ thể',
          description: 'Dùng khi phát hiện lỗi UI bị hiển thị sai, render đúp hoặc lỗi cú pháp JS.',
          content: `Task: Sửa lỗi trang quản lý: input trong item con của data xyz đang bị render đúp.\n\nHãy kiểm tra cấu trúc data xyz và logic render trước khi sửa.\n\nYêu cầu:\n1. Chỉ sửa nguyên nhân trực tiếp gây render đúp input.\n2. Không refactor lan man.\n3. Không được đoán field/API/component nếu chưa thấy trong source.\n4. Nếu thiếu dữ liệu, hãy báo rõ cần thêm gì.\n\nReport sau khi sửa:\n1. Đã kiểm tra file nào\n2. Nguyên nhân gây lỗi\n3. Đã sửa gì\n4. Cách verify`
        },
        {
          title: 'Prompt Debug kèm Stack Trace',
          description: 'Cung cấp trực tiếp log lỗi trên terminal hoặc console browser để AI điều tra chính xác.',
          content: `Task: Khắc phục lỗi crash ứng dụng sau.\n\nStack Trace:\n[Dán log lỗi ở đây]\n\nYêu cầu:\n1. Hãy tìm dòng code gây ra lỗi dựa trên stack trace trên.\n2. Chỉ sửa đúng lỗi này. Không tự ý chỉnh sửa tối ưu hóa phần code xung quanh.\n3. Viết giải thích ngắn gọn nguyên nhân lỗi trước khi xuất code sửa.\n4. Đưa ra 2 test case để xác minh lỗi đã được giải quyết.`
        }
      ]
    },
    {
      category: 'Refactor Prompt',
      icon: <CodeIcon />,
      prompts: [
        {
          title: 'Prompt Refactor tối ưu hiệu năng',
          description: 'Dùng để cấu trúc lại các hàm tính toán phức tạp mà không làm thay đổi logic đầu ra.',
          content: `Task: Tối ưu hiệu năng của hàm xử lý dữ liệu sau.\n\nĐoạn code cần refactor:\n[Dán code ở đây]\n\nYêu cầu:\n1. Tối ưu độ phức tạp thời gian (Time Complexity) và không gian (Space Complexity).\n2. Giữ nguyên chữ ký hàm (function signature), tên hàm, tham số đầu vào và kiểu dữ liệu trả về.\n3. Viết comment rõ ràng ở những phần code được tối ưu.\n4. Đảm bảo code mới chạy qua tất cả các trường hợp biên (null, undefined, mảng rỗng).`
        },
        {
          title: 'Prompt chuyển đổi Class Component sang Functional Component (React)',
          description: 'Tái cấu trúc code React cũ sang Hooks hiện đại.',
          content: `Task: Chuyển đổi React Class Component sau sang Functional Component sử dụng Hooks.\n\nClass Component:\n[Dán code ở đây]\n\nYêu cầu:\n1. Thay đổi cấu trúc state sang useState.\n2. Chuyển đổi các lifecycle methods (componentDidMount, componentDidUpdate) sang useEffect thích hợp.\n3. Sử dụng useMemo hoặc useCallback nếu component con bị render dư thừa.\n4. Giữ nguyên các prop types và class names để tránh lỗi UI.`
        }
      ]
    },
    {
      category: 'Review Prompt',
      icon: <RateReviewIcon />,
      prompts: [
        {
          title: 'Prompt Review an toàn và bảo mật',
          description: 'Kiểm tra code xem có lỗi bảo mật hoặc rò rỉ dữ liệu trước khi merge code.',
          content: `Bạn là Senior Security Auditor. Hãy đóng vai trò Reviewer để kiểm tra đoạn code sau đây.\n\nCode cần review:\n[Dán code ở đây]\n\nYêu cầu phân tích:\n1. Có lỗ hổng bảo mật nào không (ví dụ: SQL Injection, XSS, lộ thông tin nhạy cảm, tràn bộ đệm)?\n2. Có rủi ro rò rỉ bộ nhớ (memory leak) hay không?\n3. Có tuân thủ các quy tắc viết code an toàn (Safe Coding Standards) không?\n\nHãy chấm điểm độ an toàn (từ 1 đến 10) và gợi ý cách khắc phục cụ thể cho từng lỗi phát hiện.`
        }
      ]
    },
    {
      category: 'Anti-hallucination Prompt',
      icon: <SecurityIcon />,
      prompts: [
        {
          title: 'Prompt chặn Agent làm việc lan man',
          description: 'Đặt ra rào chắn tuyệt đối về phạm vi sửa đổi tệp tin cho AI agent tự động.',
          content: `YÊU CẦU QUAN TRỌNG VỀ PHẠM VI (SCOPE CONTROL):\n\nBạn chỉ được phép chỉnh sửa các tệp tin trong danh sách sau:\n- [Đường dẫn file 1]\n- [Đường dẫn file 2]\n\nNghiêm cấm tuyệt đối:\n1. Không được tự ý sửa bất kỳ file nào khác ngoài danh sách trên.\n2. Không được cài đặt thêm thư viện mới (npm install) nếu chưa được tôi cho phép.\n3. Nếu bạn thấy cần phải sửa file khác để tính năng hoạt động, hãy dừng lại và hỏi ý kiến tôi trước.\n4. Không thực hiện tối ưu hóa cấu trúc thư mục hay dọn dẹp các đoạn code thừa không liên quan đến task.`
        }
      ]
    },
    {
      category: 'Agent Report Prompt',
      icon: <AssignmentIcon />,
      prompts: [
        {
          title: 'Prompt định dạng báo cáo kết quả của Agent',
          description: 'Yêu cầu AI viết báo cáo tóm tắt rõ ràng sau khi hoàn thành sửa đổi code.',
          content: `Sau khi hoàn thành chỉnh sửa code, hãy báo cáo lại kết quả theo đúng định dạng Markdown dưới đây.\n\nFormat Báo cáo:\n### 1. File đã kiểm tra\n- [Tên file kèm giải thích ngắn]\n\n### 2. Nguyên nhân lỗi\n- [Ghi rõ lý do logic code chạy sai]\n\n### 3. Chi tiết các thay đổi\n- [Mô tả code cũ vs code mới]\n\n### 4. Hướng dẫn kiểm chứng (Verify Steps)\n- [Mô tả cụ thể các bước chạy thử hoặc test cases để chứng minh lỗi đã được khắc phục]`
        }
      ]
    }
  ];

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', width: '100%' }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 800, fontFamily: 'Outfit', mb: 1 }}>
          Prompt Playbook
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Thư viện các câu lệnh (prompt) mẫu chất lượng cao giúp làm việc cùng AI Agent hiệu quả và chính xác.
        </Typography>
      </Box>

      {/* Tabs */}
      <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'grey.50' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="prompt categories tabs"
            sx={{
              px: 2,
              '& .MuiTab-root': {
                fontWeight: 600,
                py: 2,
                minHeight: 64,
              }
            }}
          >
            {playbooks.map((playbook, idx) => (
              <Tab
                key={playbook.category}
                label={playbook.category}
                icon={playbook.icon}
                iconPosition="start"
                id={`playbook-tab-${idx}`}
                aria-controls={`playbook-tabpanel-${idx}`}
              />
            ))}
          </Tabs>
        </Box>

        <CardContent sx={{ p: 4 }}>
          {playbooks.map((playbook, idx) => (
            <TabPanel key={playbook.category} value={value} index={idx}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {playbook.prompts.map((item, pIdx) => (
                  <Box key={pIdx}>
                    <Typography variant="subtitle1" sx={{ color: 'text.primary', mb: 0.5, fontFamily: 'Outfit', fontWeight: 700 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {item.description}
                    </Typography>
                    <PromptBlock content={item.content} />
                  </Box>
                ))}
              </Box>
            </TabPanel>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};
