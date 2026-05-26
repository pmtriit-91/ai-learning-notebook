import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardContent, Button, TextField, Chip, Divider, MenuItem, Select, FormControl, InputLabel, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import TerminalIcon from '@mui/icons-material/Terminal';
import LinkIcon from '@mui/icons-material/Link';
import { lessons } from '../data/lessons';
import { phases } from '../data/roadmap';
import { useLessonProgress } from '../hooks/useLessonProgress';
import { StatusBadge } from '../components/StatusBadge';
import { PromptBlock } from '../components/PromptBlock';
import type { LessonStatus } from '../types/lesson';

export const LessonPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { progress, updateLessonStatus, updateLessonNotes } = useLessonProgress();

  const lesson = lessons.find((l) => l.id === id);
  const phase = phases.find((p) => p.id === lesson?.phaseId);

  const lessonProgress = lesson ? progress[lesson.id] : null;
  const [status, setStatus] = useState<LessonStatus>('not-started');
  const [notes, setNotes] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Sync state when lesson progress updates
  useEffect(() => {
    if (lessonProgress) {
      setStatus(lessonProgress.status);
      setNotes(lessonProgress.userNotes || '');
    }
  }, [lessonProgress, id]);

  if (!lesson) {
    return (
      <Box sx={{ py: 5, textAlign: 'center' }}>
        <Typography variant="h5" color="error" sx={{ fontWeight: 700 }}>
          Không tìm thấy bài học!
        </Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/roadmap')} sx={{ mt: 3 }}>
          Quay lại Roadmap
        </Button>
      </Box>
    );
  }

  const handleStatusChange = (newStatus: LessonStatus) => {
    setStatus(newStatus);
    updateLessonStatus(lesson.id, newStatus);
  };

  const handleSaveNotes = () => {
    updateLessonNotes(lesson.id, notes);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', width: '100%' }}>
      {/* Header Back Link */}
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/roadmap')}
        sx={{ mb: 3, fontWeight: 600, color: 'text.secondary' }}
      >
        Lộ trình học tập
      </Button>

      {/* Lesson Heading Block */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>
          {phase?.title} — Bài {lesson.lessonNumber}
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 800,
            fontFamily: 'Outfit',
            mt: 1,
            mb: 2,
            lineHeight: 1.2,
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          {lesson.title}
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 }}>
          <StatusBadge status={status} size="medium" />
          {lesson.estimatedMinutes && (
            <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
              <AccessTimeIcon fontSize="small" sx={{ mr: 0.5 }} />
              <Typography variant="body2">{lesson.estimatedMinutes} phút</Typography>
            </Box>
          )}
        </Box>
      </Box>

      <Grid container spacing={4}>
        {/* Main Lesson Content */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            {/* Description */}
            <Typography variant="subtitle1" sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 4, fontSize: '1.1rem', lineHeight: 1.5 }}>
              "{lesson.description}"
            </Typography>

            {/* Concepts */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, fontFamily: 'Outfit', fontWeight: 700 }}>
                <BookmarkBorderIcon color="primary" /> Khái niệm cốt lõi
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {lesson.concepts.map((concept) => (
                  <Chip
                    key={concept}
                    label={concept}
                    sx={{
                      fontWeight: 600,
                      bgcolor: 'rgba(59, 130, 246, 0.06)',
                      color: 'primary.main',
                      px: 0.5,
                    }}
                  />
                ))}
              </Box>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Summary */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, fontFamily: 'Outfit', fontWeight: 700 }}>
                <MenuBookIcon color="primary" /> Tóm tắt bài học
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.6 }}>
                {lesson.summary}
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Key Takeaways */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, fontFamily: 'Outfit', fontWeight: 700 }}>
                <TaskAltIcon color="primary" /> Điểm mấu chốt cần nhớ (Key Takeaways)
              </Typography>
              <Box component="ul" sx={{ pl: 2, m: 0, '& li': { mb: 1.5, color: 'text.primary', lineHeight: 1.6 } }}>
                {lesson.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx}>{takeaway}</li>
                ))}
              </Box>
            </Box>

            {/* Example Prompts */}
            {lesson.examplePrompts && lesson.examplePrompts.length > 0 && (
              <>
                <Divider sx={{ my: 4 }} />
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, fontFamily: 'Outfit', fontWeight: 700 }}>
                    <TerminalIcon color="primary" /> Prompt mẫu (Example Prompt)
                  </Typography>
                  {lesson.examplePrompts.map((prompt, idx) => (
                    <PromptBlock key={idx} content={prompt} />
                  ))}
                </Box>
              </>
            )}

            {/* Exercises */}
            {lesson.exercises && lesson.exercises.length > 0 && (
              <>
                <Divider sx={{ my: 4 }} />
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, fontFamily: 'Outfit', fontWeight: 700 }}>
                    <CheckCircleIcon color="primary" /> Bài tập tự kiểm tra
                  </Typography>
                  <Box component="ol" sx={{ pl: 2, m: 0, '& li': { mb: 1.5, color: 'text.primary', lineHeight: 1.6 } }}>
                    {lesson.exercises.map((exercise, idx) => (
                      <li key={idx}>{exercise}</li>
                    ))}
                  </Box>
                </Box>
              </>
            )}

            {/* References */}
            {lesson.references && lesson.references.length > 0 && (
              <>
                <Divider sx={{ my: 4 }} />
                <Box>
                  <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, fontFamily: 'Outfit', fontWeight: 700 }}>
                    <LinkIcon color="primary" /> Tài liệu tham khảo
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0, '& li': { mb: 1 } }}>
                    {lesson.references.map((ref, idx) => (
                      <li key={idx}>
                        <Typography
                          component="a"
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: 'primary.main',
                            textDecoration: 'none',
                            fontWeight: 500,
                            '&:hover': { textDecoration: 'underline' },
                          }}
                        >
                          {ref.title}
                        </Typography>
                      </li>
                    ))}
                  </Box>
                </Box>
              </>
            )}
          </Paper>
        </Grid>

        {/* Sidebar notes */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ position: 'sticky', top: 24 }}>
            <Card
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: 'none',
                borderRadius: 3,
                mb: 3,
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2.5, fontFamily: 'Outfit', fontWeight: 700 }}>
                  Tiến trình học bài này
                </Typography>

                {/* Status selector */}
                <FormControl fullWidth size="small" sx={{ mb: 3 }}>
                  <InputLabel id="status-select-label">Trạng thái bài học</InputLabel>
                  <Select
                    labelId="status-select-label"
                    value={status}
                    label="Trạng thái bài học"
                    onChange={(e) => handleStatusChange(e.target.value as LessonStatus)}
                  >
                    <MenuItem value="not-started">Chưa học</MenuItem>
                    <MenuItem value="learning">Đang học</MenuItem>
                    <MenuItem value="completed">Đã hoàn thành</MenuItem>
                  </Select>
                </FormControl>

                <Divider sx={{ my: 2 }} />

                {/* Notes box */}
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
                  Sổ tay ghi chép cá nhân
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1.5 }}>
                  Ghi lại đúc kết của riêng bạn, lỗi sai thường gặp hoặc prompt hữu dụng rút ra được.
                </Typography>

                <TextField
                  fullWidth
                  multiline
                  rows={8}
                  placeholder="Ghi chú đúc kết của bạn sau bài học này..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      fontSize: '0.875rem',
                      fontFamily: 'inherit',
                    },
                  }}
                />

                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleSaveNotes}
                  color={saveSuccess ? "success" : "primary"}
                  sx={{ py: 1, fontWeight: 600, borderRadius: 2, boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}
                >
                  {saveSuccess ? "Đã lưu thành công!" : "Lưu đúc kết"}
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
