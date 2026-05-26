# Bài 1 — LLM, Token, Context Window và Hallucination

> **Mục tiêu bài học:**  
> Hiểu 4 khái niệm nền tảng giúp làm việc với AI agent có kiểm soát hơn: **LLM**, **Token**, **Context Window**, và **Hallucination**.

---

## 1. Vì sao bài này quan trọng?

Khi dùng ChatGPT, Antigravity, Cursor, Claude Code hoặc bất kỳ AI coding agent nào, rất nhiều lỗi xảy ra không phải vì AI “ngu”, mà vì:

- AI không có đủ context.
- Context quá nhiều và bị nhiễu.
- Prompt thiếu scope.
- Agent tự đoán khi chưa kiểm tra source.
- Agent sửa code nhưng không có tiêu chí verify.
- User tưởng AI nhớ và hiểu toàn bộ dự án như con người.

Bài này giúp mình hiểu cơ chế nền để giao việc cho AI tốt hơn.

---

## 2. Khái niệm chính

## 2.1. LLM là gì?

**LLM** là viết tắt của **Large Language Model** — mô hình ngôn ngữ lớn.

Nói dễ hiểu:

> **LLM là lõi suy luận/ngôn ngữ của AI.**  
> Nó đọc context, hiểu yêu cầu, suy luận, sinh câu trả lời hoặc đề xuất hành động.

LLM **không phải toàn bộ AI agent**.

```txt
Agent = LLM + Tools + Quyền thao tác + Workflow
```

Ví dụ:

```txt
LLM:
- Đọc yêu cầu
- Phân tích lỗi
- Suy luận nguyên nhân
- Đề xuất hướng sửa
- Viết giải thích

AI Agent:
- Dùng LLM để suy luận
- Đọc file trong repo
- Sửa code
- Chạy terminal
- Kiểm tra log
- Báo cáo kết quả
```

### Ghi nhớ

> **LLM là bộ não suy luận/ngôn ngữ.  
> Agent là LLM được gắn thêm tay chân, công cụ và quy trình làm việc.**

---

## 2.2. Token là gì?

**Token** là đơn vị nhỏ mà model dùng để đọc input và sinh output.

Token có thể đến từ:

- Prompt của user
- System instruction
- Code
- Logs
- Tool results
- Error message
- Markdown
- Câu trả lời của AI

Nói ngắn gọn:

> **Token là đơn vị chữ/code/thông tin mà model phải xử lý.**

Ví dụ trong workflow AI coding:

```txt
User prompt
+ V7 skills instruction
+ Source code
+ Terminal logs
+ Browser screenshot description
+ Agent report
= Tất cả đều trở thành token trong context
```

### Ghi nhớ

> Prompt càng dài, file càng nhiều, log càng rối → token càng nhiều → model càng phải gánh nhiều thông tin.

---

## 2.3. Context Window là gì?

**Context window** là vùng nhớ tạm chứa các token mà model có thể nhìn thấy trong một lần xử lý.

Nó có thể gồm:

- System instruction
- Lịch sử chat
- Prompt hiện tại
- File/code được đưa vào
- Tool result
- Log lỗi
- Agent report
- Output model đang sinh ra

Nói dễ hiểu:

```txt
Context window = bàn làm việc hiện tại của AI
Memory dài hạn = tủ hồ sơ
Token = từng dòng chữ / từng mảnh thông tin trên bàn
```

### Điểm quan trọng

Context window **không phải trí nhớ vĩnh viễn**.

Nó chỉ là “bộ nhớ làm việc tạm thời” trong một lần xử lý.

Nếu context quá ít:

```txt
AI thiếu dữ liệu → dễ đoán sai
```

Nếu context quá nhiều:

```txt
AI bị nhiễu → dễ sửa lan man hoặc quên scope chính
```

### Ghi nhớ

> **Context window là những gì AI đang nhìn thấy ngay lúc làm việc.  
> Muốn AI làm đúng, phải đưa đúng tài liệu lên bàn làm việc của nó.**

---

## 2.4. Hallucination là gì?

**Hallucination** là khi AI bịa, đoán sai, hoặc kết luận chưa được kiểm chứng nhưng trình bày như thể nó chắc chắn đúng.

Ví dụ:

```txt
AI nói:
"Lỗi nằm ở file UserForm.tsx dòng 42."

Nhưng thực tế:
AI chưa hề đọc file UserForm.tsx.
```

Đây là hallucination.

Trong coding agent, hallucination thường có dạng:

- Bịa tên file
- Bịa tên component
- Bịa API
- Tưởng function tồn tại nhưng không có
- Nói đã test nhưng thật ra chưa test
- Kết luận nguyên nhân khi chưa đọc log
- Tự sửa theo phỏng đoán thay vì kiểm tra source

### Nguyên nhân thường gặp

Hallucination có thể xảy ra khi:

- Prompt thiếu dữ liệu.
- Context bị nhiễu.
- User hỏi quá chung.
- Agent bị ép phải trả lời.
- Agent chưa kiểm tra source/log nhưng vẫn kết luận.
- Model suy luận sai.
- Dữ liệu trong context đã cũ hoặc không khớp thực tế.

### Ghi nhớ

> **Hallucination là lỗi nguy hiểm vì AI có thể sai nhưng nói rất tự tin.**

---

## 3. Bốn khái niệm này liên hệ với nhau thế nào?

Có thể nhớ bằng sơ đồ:

```txt
LLM = lõi suy luận/ngôn ngữ
Token = đơn vị thông tin AI đọc và sinh ra
Context Window = vùng nhớ tạm chứa token
Hallucination = lỗi khi AI đoán sai/bịa nhưng nói như thật
```

Trong workflow repo:

```txt
User giao task cho agent
→ Task/code/log được chuyển thành token
→ Token nằm trong context window
→ LLM xử lý context để suy luận
→ Agent dùng tool để sửa code
→ Nếu context thiếu/nhiễu/scope mơ hồ, AI dễ hallucinate
```

---

## 4. Liên hệ với Antigravity / Repo Workflow

Khi dùng Antigravity agent sửa code, context có thể gồm:

- Yêu cầu của user
- Instruction của skills
- File code liên quan
- Log lỗi
- Browser output
- Agent report
- Git diff
- Lịch sử trao đổi trong box chat

Nếu context không được kiểm soát, agent dễ gặp lỗi:

```txt
- Sửa nhầm file
- Tự refactor ngoài scope
- Quên yêu cầu ban đầu
- Bịa nguyên nhân lỗi
- Báo cáo nghe hợp lý nhưng không đúng
- Nói đã kiểm tra nhưng thực tế chưa verify
```

Vì vậy, khi giao việc cho agent, cần luôn có:

```txt
Goal rõ
Scope rõ
File/khu vực liên quan rõ
Expected behavior rõ
Actual behavior rõ
Constraint rõ
Report format rõ
Verify step rõ
```

---

## 5. Nguyên nhân agent sửa code sai hoặc lan man

Các nguyên nhân chính:

1. **Prompt thiếu ngữ cảnh**  
   Agent không biết đủ thông tin để sửa đúng.

2. **Ràng buộc chưa rõ**  
   Agent không biết được phép sửa gì và không được sửa gì.

3. **Scope quá rộng hoặc mơ hồ**  
   Agent không biết điểm bắt đầu và điểm dừng.

4. **Context quá nhiều thông tin gây nhiễu**  
   Agent nhìn quá nhiều thứ không liên quan.

5. **Không có expected behavior / actual behavior**  
   Agent không biết trạng thái đúng phải là gì.

6. **Không có tiêu chí verify**  
   Agent sửa xong nhưng không có cách chứng minh là đúng.

7. **Không cấm refactor ngoài phạm vi**  
   Agent có thể tự ý “dọn code” quá rộng và sinh lỗi mới.

---

## 6. Prompt mẫu chống agent đoán bừa

### Bản ngắn gọn dùng thực chiến

```txt
Sửa lỗi trang quản lý: input trong item con của data xyz đang bị render đúp.

Hãy kiểm tra cấu trúc data xyz và logic render trước khi sửa.

Yêu cầu:
1. Chỉ sửa nguyên nhân trực tiếp gây render đúp input.
2. Không refactor lan man.
3. Không được đoán field/API/component nếu chưa thấy trong source.
4. Nếu thiếu dữ liệu, hãy báo rõ cần thêm gì.

Report sau khi sửa:
1. Đã kiểm tra file nào
2. Nguyên nhân gây lỗi
3. Đã sửa gì
4. Cách verify
```

---

### Bản đầy đủ hơn cho coding agent

```txt
Task: Sửa lỗi ở trang quản lý.

Vấn đề hiện tại:
Các input nhập liệu trong item con của data xyz đang bị render đúp.

Yêu cầu:
1. Trước tiên hãy kiểm tra cấu trúc dữ liệu của data xyz và logic render các item con.
2. Chỉ sửa nguyên nhân trực tiếp gây render đúp input.
3. Không refactor ngoài phạm vi task.
4. Không được đoán tên field, API, component hoặc cấu trúc data nếu chưa kiểm tra trong source.
5. Nếu chưa đủ thông tin để xác định cấu trúc data, hãy hỏi lại hoặc báo rõ phần còn thiếu.

Sau khi sửa, báo cáo:
- File đã kiểm tra
- Nguyên nhân gây lỗi
- File đã sửa
- Cách verify lỗi đã hết
```

---

## 7. Bài tập đã làm

### Câu 1 — Định nghĩa

#### LLM là gì?

Câu trả lời ban đầu:

> LLM là bộ não của AI agent, nơi quản trị của mô hình ngôn ngữ lớn, đại khái nó là nơi điều phối AI.

Chỉnh lại:

```txt
LLM là lõi suy luận/ngôn ngữ của AI.
Nó đọc context, hiểu yêu cầu, suy luận và sinh câu trả lời.
LLM không phải toàn bộ agent.
Agent = LLM + tools + quyền thao tác + workflow.
```

---

#### Token là gì?

Câu trả lời đã khá đúng:

```txt
Token là các đơn vị nhỏ từ prompt, văn bản, dấu câu, code, logs, tool results mà AI đọc và xử lý.
```

Chỉnh lại cho gọn:

```txt
Token là đơn vị nhỏ mà model dùng để đọc input và tạo output.
```

---

#### Context Window là gì?

Câu trả lời ban đầu:

> Là nơi gom lại tokens hoặc task, đại khái là bộ nhớ Agent.

Chỉnh lại:

```txt
Context window là vùng nhớ tạm chứa các token mà model có thể nhìn thấy trong một lần xử lý.
Nó giống bàn làm việc hiện tại của AI, không phải trí nhớ vĩnh viễn.
```

---

#### Hallucination là gì?

Câu trả lời ban đầu đã đúng hướng:

```txt
Hallucination là ảo giác AI, xảy ra khi context nhiễu, thông tin chung chung, prompt lủng củng hoặc box chat có quá nhiều thông tin làm agent không trỏ đúng scope.
```

Chỉnh lại đầy đủ hơn:

```txt
Hallucination là khi AI tạo ra thông tin sai, bịa hoặc chưa được kiểm chứng nhưng trình bày như thể chắc chắn đúng.
```

---

## 8. Bài tập tự kiểm tra

Trả lời lại bằng lời của mình:

```txt
1. LLM khác AI Agent ở điểm nào?
2. Vì sao prompt dài chưa chắc tốt?
3. Vì sao context quá nhiều có thể làm agent sửa lan man?
4. Khi agent báo “đã test”, mình cần yêu cầu thêm gì?
5. Một prompt debug tốt cần có những thành phần nào?
```

---

## 9. Công thức prompt debug tốt

Một prompt debug tốt nên có:

```txt
1. Task rõ ràng
2. Vị trí lỗi rõ ràng
3. Actual behavior
4. Expected behavior
5. Khu vực/file nghi vấn nếu có
6. Constraint: không refactor lan man
7. Luật chống đoán bừa
8. Report format
9. Verify step
```

Template:

```txt
Task: [Mô tả việc cần sửa]

Vấn đề hiện tại:
[Actual behavior]

Kết quả mong muốn:
[Expected behavior]

Phạm vi:
[Trang / component / file / khu vực liên quan]

Yêu cầu:
1. Kiểm tra source/log liên quan trước khi kết luận.
2. Không đoán tên file/API/function nếu chưa thấy trong source.
3. Chỉ sửa nguyên nhân trực tiếp.
4. Không refactor ngoài phạm vi.
5. Nếu thiếu dữ liệu, báo rõ cần thêm gì.

Report sau khi sửa:
1. Đã kiểm tra gì
2. Nguyên nhân
3. Đã sửa file nào
4. Cách verify
```

---

## 10. Kết luận cần nhớ

> **AI không “biết hết”.  
> Nó xử lý token trong context window.  
> Nếu context thiếu, nhiễu, hoặc prompt mơ hồ, LLM có thể hallucinate.**

Với repo/agent workflow:

> **Muốn AI làm đúng, phải cho đúng context, giới hạn đúng scope, bắt nó kiểm chứng, và không cho nó đoán bừa.**

---

## 11. One-line Memory

```txt
LLM là lõi suy luận, token là đơn vị thông tin, context window là bộ nhớ tạm, hallucination là khi AI đoán sai/bịa nhưng nói như thật.
```

---

## 12. Tài liệu tham khảo nên đọc

### Ưu tiên 1 — Google Machine Learning Crash Course: Large Language Models

Dùng để hiểu nền tảng về LLM, token, transformer, context.

```txt
https://developers.google.com/machine-learning/crash-course/llm
```

---

### Ưu tiên 2 — OpenAI Prompt Engineering Guide

Dùng để học cách giao việc rõ ràng, kiểm soát context, viết prompt có cấu trúc.

```txt
https://platform.openai.com/docs/guides/prompt-engineering
```

---

### Ưu tiên 3 — OpenAI Tokenizer

Dùng để thử dán prompt/code vào và xem chúng được chia thành token như thế nào.

```txt
https://platform.openai.com/tokenizer
```

---

### Ưu tiên 4 — Anthropic Context Windows

Dùng để hiểu context window như “working memory” và vì sao context lớn chưa chắc tốt.

```txt
https://docs.anthropic.com/en/docs/build-with-claude/context-windows
```

---

### Ưu tiên 5 — OpenAI: Why Language Models Hallucinate

Đọc sau khi đã nắm cơ bản, để hiểu sâu hơn về hallucination.

```txt
https://cdn.openai.com/pdf/d04913be-3f6f-4d2b-b283-ff432ef4aaa5/why-language-models-hallucinate.pdf
```

---

## 13. Checklist hoàn thành bài 1

- [ ] Hiểu LLM khác AI Agent.
- [ ] Hiểu token là đơn vị model xử lý.
- [ ] Hiểu context window là bộ nhớ tạm.
- [ ] Hiểu hallucination là AI bịa/đoán sai nhưng nói như thật.
- [ ] Biết vì sao agent sửa code lan man.
- [ ] Biết viết prompt chống agent đoán bừa.
- [ ] Biết yêu cầu report và verify sau khi agent sửa code.

---

## 14. Chuẩn bị cho bài 2

Bài tiếp theo:

```txt
Bài 2 — AI khác Google Search như thế nào?
```

Mục tiêu bài 2:

```txt
Hiểu khi nào nên hỏi AI, khi nào nên search web, khi nào cần citation, và khi nào AI có thể bịa nếu không có nguồn kiểm chứng.
```
