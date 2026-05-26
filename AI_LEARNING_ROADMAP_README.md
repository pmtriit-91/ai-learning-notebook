# AI Learning Roadmap — Lộ trình học AI cá nhân

> Mục tiêu: hệ thống hóa lại tư duy AI từ nền tảng đến thực chiến, để đi từ người dùng AI hỗ trợ code thành người biết thiết kế workflow AI, điều phối AI agent và xây sản phẩm có AI.

---

## 0. Vai trò của box học này

Trong quá trình học, ChatGPT đóng vai trò như **Thầy dạy AI cá nhân**.

Phong cách học:

- Không nhảy cóc.
- Không lan man.
- Không học quá học thuật khi chưa cần.
- Không học tool rời rạc.
- Mỗi bài phải có: hiểu → ví dụ → liên hệ repo/workflow → bài tập nhỏ.

Lộ trình này bám vào workflow thực tế hiện tại:

- ChatGPT làm thầy / mentor / project reviewer.
- Antigravity hoặc coding agent làm người thực thi trong repo.
- Human là người ra quyết định cuối cùng.
- Source code hiện tại luôn là nguồn sự thật cao nhất.
- Report, checkpoint, rollback, git discipline là các lớp kiểm soát bắt buộc.

---

## 1. Mục tiêu dài hạn

Lộ trình này không nhằm biến người học thành AI Researcher ngay từ đầu.

Mục tiêu phù hợp hơn là:

```txt
Người dùng AI hỗ trợ code
→ Người biết prompt có kiểm soát
→ Người biết dùng AI coding workflow
→ AI Workflow Architect
→ AI Product Builder
```

Nói ngắn gọn:

> Không học AI để biết lý thuyết cho nhiều, mà học để ra lệnh tốt hơn, kiểm soát agent tốt hơn, xây sản phẩm tốt hơn và tư duy hệ thống tốt hơn.

---

## 2. Sơ đồ tổng quát

```txt
Phase 1: AI Literacy
  ↓
Phase 2: Prompt Engineering
  ↓
Phase 3: AI-assisted Coding Workflow
  ↓
Phase 4: AI Workflow Architect
  ↓
Phase 5: AI Product Builder
```

Giải thích vị trí so với nhóm 4 và 5:

```txt
Phase 1, 2, 3 = nền móng trước khi đi sâu vào nhóm 4 và nhóm 5
Phase 4       = nhóm 4 — AI Workflow Architect
Phase 5       = nhóm 5 — AI Product Builder
```

---

## 3. Phase 1 — AI Literacy

### Mục tiêu

Hiểu AI/LLM ở mức đủ dùng, đủ kiểm soát, không bị thần thánh hóa AI.

### Bài học

```txt
Bài 1: LLM, token, context window, hallucination
Bài 2: AI khác Google Search như thế nào
Bài 3: Model, prompt, system prompt, instruction là gì
Bài 4: Vì sao AI trả lời sai nhưng vẫn rất tự tin
Bài 5: Cách kiểm chứng output của AI
```

### Kết quả cần đạt

Sau phase này, người học phải hiểu:

- AI không phải thần biết tuốt.
- LLM cần context để trả lời tốt.
- Prompt dài chưa chắc tốt.
- AI có thể trả lời sai nhưng rất tự tin.
- Mọi output quan trọng cần được kiểm chứng.
- Với code, source code hiện tại quan trọng hơn trí nhớ hoặc suy đoán của AI.

### Câu cần nhớ

> AI là công cụ suy luận/ngôn ngữ có giới hạn. Muốn dùng tốt phải biết đưa context, đặt constraint và kiểm chứng output.

---

## 4. Phase 2 — Prompt Engineering

### Mục tiêu

Biết giao việc cho AI rõ ràng, có kiểm soát, tránh để AI làm lan man.

### Bài học

```txt
Bài 6: Prompt tốt gồm những thành phần nào
Bài 7: Role, goal, context, constraint, output format
Bài 8: Prompt debug code
Bài 9: Prompt refactor code
Bài 10: Prompt review code
Bài 11: Prompt chống agent làm lan man
Bài 12: Xây Prompt Playbook cá nhân
```

### Kết quả cần đạt

Sau phase này, người học phải biết viết prompt theo cấu trúc:

```txt
Role: AI đang đóng vai trò gì?
Goal: Nhiệm vụ chính là gì?
Context: Thông tin nền cần biết là gì?
Constraints: Không được làm gì? Giới hạn scope ra sao?
Output format: Trả kết quả theo định dạng nào?
Verification: Kiểm chứng bằng cách nào?
```

### Ví dụ prompt chuẩn

```txt
Bạn là Senior Frontend Engineer.

Nhiệm vụ: kiểm tra lỗi layout trong component X.

Ràng buộc:
- Không refactor toàn bộ.
- Không đổi API nếu chưa cần.
- Chỉ sửa nguyên nhân trực tiếp.
- Trước khi sửa, hãy báo nguyên nhân nghi ngờ, file liên quan và rủi ro.

Output cần có:
1. Phân tích ngắn
2. File cần sửa
3. Patch đề xuất
4. Cách test lại
```

### Câu cần nhớ

> Prompt tốt không phải là câu hỏi dài. Prompt tốt là bản giao việc rõ vai trò, mục tiêu, context, giới hạn và tiêu chí kiểm chứng.

---

## 5. Phase 3 — AI-assisted Coding Workflow

### Mục tiêu

Dùng AI để code nhưng vẫn kiểm soát repo, tránh tình trạng agent sửa lan man hoặc phá logic cũ.

### Bài học

```txt
Bài 13: Workflow code với AI chuẩn
Bài 14: Chia task cho coding agent
Bài 15: Đọc report của agent
Bài 16: Scope control — giới hạn phạm vi sửa
Bài 17: Rollback, checkpoint, git discipline
Bài 18: Test UI, verify result, commit
```

### Workflow chuẩn

```txt
1. Human xác định mục tiêu
2. ChatGPT / Project Manager AI phân tích task
3. Coding agent trong IDE thực thi trong repo
4. Agent báo cáo thay đổi
5. ChatGPT review báo cáo
6. Human test UI / logic
7. Nếu ổn → commit
8. Nếu lỗi → rollback hoặc patch nhỏ
```

### Kết quả cần đạt

Sau phase này, người học phải có quy trình ổn định:

- Biết chia task nhỏ.
- Biết yêu cầu agent báo cáo.
- Biết đọc report.
- Biết test lại output.
- Biết rollback.
- Biết khi nào commit.
- Biết khi nào không cho agent tiếp tục sửa.

### Câu cần nhớ

> AI coding không phải là thả agent vào repo rồi hy vọng nó làm đúng. AI coding phải có scope, checkpoint, report, review, test và rollback.

---

## 6. Phase 4 — AI Workflow Architect

### Mục tiêu

Bước vào nhóm 4: thiết kế hệ thống làm việc với AI agent.

Đây là giai đoạn học cách điều phối AI, không chỉ dùng AI từng câu lẻ.

### Bài học

```txt
Bài 19: Agent là gì
Bài 20: Tool use là gì
Bài 21: Context engineering
Bài 22: Memory, session, observation, replay
Bài 23: Human-in-the-loop
Bài 24: Multi-agent workflow
Bài 25: Project Manager AI điều phối Coding Agent
Bài 26: Agent governance — quản trị AI agent
```

### Mô hình workflow

```txt
Human Owner
   ↓
Project Manager AI / Teacher AI / Reviewer AI
   ↓
Coding Agent trong IDE
   ↓
Repo / Browser / Test result
   ↓
Report
   ↓
Decision: continue / patch / rollback / commit
```

### Liên hệ với AgentMemory Operating Model

Nguyên tắc đã chốt:

```txt
Capture First
→ Distill Later
→ Recall Selectively
```

Nghĩa là:

- Không auto-save mọi prompt thành memory.
- Trước tiên phải có raw session / transcript / report.
- Sau đó mới đúc kết thành memory, lesson hoặc crystal.
- Khi cần mới recall.
- Code hiện tại luôn là nguồn sự thật cao nhất.

### Kết quả cần đạt

Sau phase này, người học phải hiểu:

- Agent không phải phép màu.
- Agent là LLM + tool + context + instruction + loop.
- Muốn agent tốt phải thiết kế workflow tốt.
- Memory không thay thế được source of truth.
- Human vẫn là người quyết định cuối cùng.

### Câu cần nhớ

> AI Workflow Architect không chỉ hỏi AI làm gì. Họ thiết kế cách AI nhận việc, dùng tool, báo cáo, kiểm chứng, ghi nhớ và dừng lại đúng lúc.

---

## 7. Phase 5 — AI Product Builder

### Mục tiêu

Bước vào nhóm 5: xây sản phẩm có AI feature thật.

Không cần train model từ đầu. Giai đoạn đầu nên học cách dùng model/API có sẵn để tạo sản phẩm thực tế.

### Bài học

```txt
Bài 27: AI feature trong sản phẩm là gì
Bài 28: Chatbot, assistant, RAG, automation khác nhau thế nào
Bài 29: Thiết kế mini AI product
Bài 30: AI Car Showcase Assistant
Bài 31: Tích hợp AI vào web app
Bài 32: Deploy, test, cải tiến
Bài 33: Tổng kết: từ người dùng AI thành AI Product Builder
```

### Mini product đề xuất

```txt
AI Car Showcase Assistant
```

Ý tưởng:

- Website giới thiệu xe phong cách cinematic.
- Có animation, chuyển cảnh, chi tiết xe.
- AI assistant giải thích thông số xe.
- AI gợi ý phiên bản phù hợp.
- AI so sánh mẫu xe.
- AI sinh mô tả marketing/SEO.

### Stack đề xuất

```txt
React hoặc Next.js
Tailwind CSS
Framer Motion
OpenAI API hoặc model provider khác
Vercel
```

### Kết quả cần đạt

Sau phase này, người học phải có khả năng:

- Thiết kế AI feature.
- Tích hợp AI vào web app.
- Deploy demo.
- Test output.
- Cải tiến sản phẩm dựa trên phản hồi.

### Câu cần nhớ

> AI Product Builder không chỉ gọi API. Họ biến AI thành một tính năng có ích trong sản phẩm thật.

---

## 8. Luật học bắt buộc

Để tránh học lan man, dùng luật sau:

```txt
Mỗi ngày chỉ học 1 bài.
Không qua bài mới nếu chưa làm bài tập nhỏ.
Không cần học lâu, nhưng phải học đều.
Mỗi bài phải ghi lại 3 dòng:
1. Hôm nay hiểu gì?
2. Liên hệ gì với repo/workflow của mình?
3. Lần sau dùng AI khác đi như thế nào?
```

---

## 9. Format mỗi buổi học

Mỗi bài học nên đi theo format:

```txt
1. Chủ đề hôm nay
2. Giải thích dễ hiểu
3. Ví dụ đời thường
4. Ví dụ trong code/repo/Antigravity
5. Lỗi tư duy thường gặp
6. Bài tập nhỏ
7. Kết luận cần nhớ
```

Khi học với ChatGPT, chỉ cần nhắn:

```txt
Thầy ơi, bắt đầu bài X.
```

Ví dụ:

```txt
Thầy ơi, bắt đầu bài 1: LLM, token, context window và hallucination.
```

---

## 10. AI Learning Log Template

Dùng template này để ghi chú sau mỗi bài.

```md
# AI Learning Log — Bài X

## Chủ đề
...

## Điều mình hiểu
...

## Ví dụ đời thường
...

## Liên hệ với repo / Antigravity / AI agent workflow
...

## Sai lầm mình từng mắc
...

## Prompt hoặc câu lệnh có thể dùng lại
...

## Bài tập nhỏ
...

## Kết luận cần nhớ
...
```

---

## 11. Prompt mở lại lớp học sau này

Nếu sau này mở lại file này và muốn học tiếp với ChatGPT, dùng prompt sau:

```txt
Bạn là Thầy dạy AI cá nhân của mình.
Mình đang học theo roadmap sau:
AI Literacy → Prompt Engineering → AI-assisted Coding Workflow → AI Workflow Architect → AI Product Builder.

Luật học:
- Không nhảy cóc.
- Không lan man.
- Mỗi bài phải có giải thích dễ hiểu, ví dụ đời thường, ví dụ liên hệ code/repo/Antigravity, lỗi tư duy thường gặp, bài tập nhỏ và kết luận cần nhớ.
- Hãy dạy mình theo thứ tự từ bài 1 đến bài 33.

Hôm nay hãy bắt đầu / tiếp tục bài số: [điền số bài].
```

---

## 12. Checklist tiến độ

### Phase 1 — AI Literacy

- [ ] Bài 1: LLM, token, context window, hallucination
- [ ] Bài 2: AI khác Google Search như thế nào
- [ ] Bài 3: Model, prompt, system prompt, instruction là gì
- [ ] Bài 4: Vì sao AI trả lời sai nhưng vẫn rất tự tin
- [ ] Bài 5: Cách kiểm chứng output của AI

### Phase 2 — Prompt Engineering

- [ ] Bài 6: Prompt tốt gồm những thành phần nào
- [ ] Bài 7: Role, goal, context, constraint, output format
- [ ] Bài 8: Prompt debug code
- [ ] Bài 9: Prompt refactor code
- [ ] Bài 10: Prompt review code
- [ ] Bài 11: Prompt chống agent làm lan man
- [ ] Bài 12: Xây Prompt Playbook cá nhân

### Phase 3 — AI-assisted Coding Workflow

- [ ] Bài 13: Workflow code với AI chuẩn
- [ ] Bài 14: Chia task cho coding agent
- [ ] Bài 15: Đọc report của agent
- [ ] Bài 16: Scope control — giới hạn phạm vi sửa
- [ ] Bài 17: Rollback, checkpoint, git discipline
- [ ] Bài 18: Test UI, verify result, commit

### Phase 4 — AI Workflow Architect

- [ ] Bài 19: Agent là gì
- [ ] Bài 20: Tool use là gì
- [ ] Bài 21: Context engineering
- [ ] Bài 22: Memory, session, observation, replay
- [ ] Bài 23: Human-in-the-loop
- [ ] Bài 24: Multi-agent workflow
- [ ] Bài 25: Project Manager AI điều phối Coding Agent
- [ ] Bài 26: Agent governance — quản trị AI agent

### Phase 5 — AI Product Builder

- [ ] Bài 27: AI feature trong sản phẩm là gì
- [ ] Bài 28: Chatbot, assistant, RAG, automation khác nhau thế nào
- [ ] Bài 29: Thiết kế mini AI product
- [ ] Bài 30: AI Car Showcase Assistant
- [ ] Bài 31: Tích hợp AI vào web app
- [ ] Bài 32: Deploy, test, cải tiến
- [ ] Bài 33: Tổng kết: từ người dùng AI thành AI Product Builder

---

## 13. Những thứ chưa nên học quá sớm

Tạm thời không ưu tiên:

- Toán ML nặng.
- Train model từ đầu.
- Deep Learning quá học thuật.
- Đọc paper nghiên cứu dày đặc.
- MLOps enterprise phức tạp.
- Vector database/RAG quá sâu khi chưa có use case.

Không phải vì chúng không quan trọng, mà vì hiện tại chúng chưa phải điểm nghẽn chính.

Điểm nghẽn chính hiện tại là:

> Biến cảm giác mù mờ về AI thành một sơ đồ tư duy rõ ràng, rồi luyện khả năng điều phối AI làm việc có kiểm soát.

---

## 14. Câu chốt roadmap

```txt
AI Literacy
→ Prompt Engineering
→ AI-assisted Coding Workflow
→ AI Workflow Architect
→ AI Product Builder
```

Vai trò dài hạn phù hợp:

```txt
AI Workflow Architect
AI Product Builder
AI-assisted Engineering Lead
```

Câu cần nhớ nhất:

> Không học AI theo kiểu gom tool. Học AI theo kiểu xây hệ thống tư duy, hệ thống làm việc và hệ thống sản phẩm.

