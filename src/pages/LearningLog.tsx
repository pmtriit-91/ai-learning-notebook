import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, TextField, FormControl, InputLabel, Select, MenuItem, Divider, Paper, IconButton } from '@mui/material';
import { useLessonProgress } from '../hooks/useLessonProgress';
import { lessons } from '../data/lessons';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export const LearningLog: React.FC = () => {
  const { logs, addLogEntry, deleteLogEntry } = useLessonProgress();
  
  const [lessonId, setLessonId] = useState('');
  const [learntToday, setLearntToday] = useState('');
  const [repoLinkage, setRepoLinkage] = useState('');
  const [oldMistakes, setOldMistakes] = useState('');
  const [reusablePrompt, setReusablePrompt] = useState('');
  const [nextSteps, setNextSteps] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!learntToday.trim()) return;

    const selectedLesson = lessons.find(l => l.id === lessonId);
    
    addLogEntry({
      lessonId: lessonId || undefined,
      lessonTitle: selectedLesson ? selectedLesson.title : undefined,
      learntToday,
      repoLinkage,
      oldMistakes,
      reusablePrompt,
      nextSteps
    });

    // Reset Form
    setLessonId('');
    setLearntToday('');
    setRepoLinkage('');
    setOldMistakes('');
    setReusablePrompt('');
    setNextSteps('');
    
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', width: '100%' }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 800, fontFamily: 'Outfit', mb: 1 }}>
          Nhật ký học tập
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Hệ thống hóa bài học rút ra, liên hệ thực tế dự án của bạn và lưu trữ các bài học đắt giá.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Form Write Log */}
        <Grid size={{ xs: 12, lg: 5 }}>
          <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 3, position: 'sticky', top: 24 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1, fontFamily: 'Outfit', fontWeight: 700 }}>
                <CreateIcon color="primary" /> Viết nhật ký hôm nay
              </Typography>
              
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {/* Select Lesson */}
                <FormControl fullWidth size="small">
                  <InputLabel id="lesson-select-label">Bài học liên quan</InputLabel>
                  <Select
                    labelId="lesson-select-label"
                    value={lessonId}
                    label="Bài học liên quan"
                    onChange={(e) => setLessonId(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>Không liên quan bài cụ thể</em>
                    </MenuItem>
                    {lessons.map((l) => (
                      <MenuItem key={l.id} value={l.id}>
                        Bài {l.lessonNumber} - {l.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* Learnt Today */}
                <TextField
                  fullWidth
                  required
                  label="Hôm nay hiểu được gì?"
                  multiline
                  rows={2}
                  placeholder="Ghi ngắn gọn điểm sáng nhất bạn học được hôm nay..."
                  value={learntToday}
                  onChange={(e) => setLearntToday(e.target.value)}
                  size="small"
                />

                {/* Repo Linkage */}
                <TextField
                  fullWidth
                  label="Liên hệ gì với repo/workflow thực tế?"
                  multiline
                  rows={2}
                  placeholder="Hôm nay áp dụng điều này vào repo hay cấu trúc code như thế nào..."
                  value={repoLinkage}
                  onChange={(e) => setRepoLinkage(e.target.value)}
                  size="small"
                />

                {/* Old Mistakes */}
                <TextField
                  fullWidth
                  label="Sai lầm cũ là gì?"
                  multiline
                  rows={2}
                  placeholder="Lỗi tư duy cũ hoặc bug code do thói quen cũ..."
                  value={oldMistakes}
                  onChange={(e) => setOldMistakes(e.target.value)}
                  size="small"
                />

                {/* Reusable Prompt */}
                <TextField
                  fullWidth
                  label="Prompt nào dùng lại được?"
                  multiline
                  rows={2}
                  placeholder="Mẫu prompt bạn thấy hiệu quả nhất cho bài học hôm nay..."
                  value={reusablePrompt}
                  onChange={(e) => setReusablePrompt(e.target.value)}
                  size="small"
                />

                {/* Next Steps */}
                <TextField
                  fullWidth
                  label="Bài tiếp theo / Hành động tiếp theo là gì?"
                  multiline
                  rows={2}
                  placeholder="Dự định bài tiếp theo sẽ nghiên cứu là gì..."
                  value={nextSteps}
                  onChange={(e) => setNextSteps(e.target.value)}
                  size="small"
                />

                <Button
                  type="submit"
                  variant="contained"
                  color={success ? "success" : "primary"}
                  sx={{ py: 1, fontWeight: 600, borderRadius: 2, boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}
                >
                  {success ? "Đã lưu nhật ký!" : "Lưu nhật ký"}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Logs List */}
        <Grid size={{ xs: 12, lg: 7 }}>
          <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Outfit', fontWeight: 700 }}>
            Nhật ký đã ghi chép ({logs.length})
          </Typography>

          {logs.length === 0 ? (
            <Paper
              elevation={0}
              sx={{
                p: 5,
                textAlign: 'center',
                border: '1px dashed',
                borderColor: 'divider',
                borderRadius: 3,
                bgcolor: 'grey.50',
              }}
            >
              <AutoStoriesIcon sx={{ fontSize: '3rem', color: 'text.disabled', mb: 2 }} />
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 700 }}>
                Chưa có nhật ký nào được ghi lại
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Viết nhật ký học tập giúp bạn lưu trữ kinh nghiệm thực tế, đúc kết các prompt tốt và tránh lặp lại các lỗi sai cũ khi code với AI.
              </Typography>
            </Paper>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {logs.map((log) => (
                <Card key={log.id} sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 3 }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box>
                        {log.lessonTitle ? (
                          <Typography variant="caption" color="primary" sx={{ textTransform: 'uppercase', fontWeight: 700 }}>
                            Liên quan: {log.lessonTitle}
                          </Typography>
                        ) : (
                          <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                            Nhật ký chung
                          </Typography>
                        )}
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                          Ngày ghi: {log.date}
                        </Typography>
                      </Box>
                      <IconButton onClick={() => deleteLogEntry(log.id)} size="small" color="error">
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>

                    <Typography variant="subtitle1" sx={{ mb: 1, color: 'text.primary', fontFamily: 'Outfit', fontWeight: 700 }}>
                      {log.learntToday}
                    </Typography>

                    <Divider sx={{ my: 1.5 }} />

                    <Grid container spacing={2}>
                      {log.repoLinkage && (
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                            Liên hệ thực tế repo:
                          </Typography>
                          <Typography variant="body2" color="text.primary">
                            {log.repoLinkage}
                          </Typography>
                        </Grid>
                      )}
                      
                      {log.oldMistakes && (
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                            Sai lầm rút kinh nghiệm:
                          </Typography>
                          <Typography variant="body2" color="text.primary">
                            {log.oldMistakes}
                          </Typography>
                        </Grid>
                      )}

                      {log.reusablePrompt && (
                        <Grid size={{ xs: 12 }}>
                          <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                            Prompt dùng lại được:
                          </Typography>
                          <Box sx={{ bgcolor: 'grey.50', p: 1.5, borderRadius: 1.5, border: '1px solid', borderColor: 'grey.100', mt: 0.5 }}>
                            <Typography variant="body2" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                              {log.reusablePrompt}
                            </Typography>
                          </Box>
                        </Grid>
                      )}

                      {log.nextSteps && (
                        <Grid size={{ xs: 12 }}>
                          <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                            Bước đi / Bài học tiếp theo:
                          </Typography>
                          <Typography variant="body2" color="text.primary">
                            {log.nextSteps}
                          </Typography>
                        </Grid>
                      )}
                    </Grid>
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
