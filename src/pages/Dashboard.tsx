import { Box, Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { useLessonProgress } from '../hooks/useLessonProgress';
import { lessons } from '../data/lessons';
import { phases } from '../data/roadmap';
import { LessonCard } from '../components/LessonCard';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { progress, getStats } = useLessonProgress();
  const stats = getStats();

  // Tìm bài học hiện tại (đang học hoặc chưa bắt đầu đầu tiên)
  let currentLesson = lessons.find((l) => progress[l.id]?.status === 'learning');
  if (!currentLesson) {
    currentLesson = lessons.find((l) => progress[l.id]?.status === 'not-started') || lessons[0];
  }

  // Tìm phase hiện tại của bài học này
  const currentPhase = phases.find((p) => p.id === currentLesson?.phaseId);

  // Tìm 3 bài học tiếp theo (chưa hoàn thành) sau bài học hiện tại
  const currentIndex = lessons.findIndex((l) => l.id === currentLesson?.id);
  const nextLessons = lessons
    .slice(currentIndex + 1)
    .filter((l) => progress[l.id]?.status !== 'completed')
    .slice(0, 3);

  // Nếu không còn bài học tiếp theo và đã hoàn thành hết
  const isFinishedAll = stats.completed === stats.total;

  return (
    <Box>
      {/* Welcome Banner */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 800, fontFamily: 'Outfit', color: 'text.primary', mb: 1 }}>
          AI Learning Notebook
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Hệ thống hóa tư duy AI, lưu giữ prompt mẫu, bài học thực chiến và theo dõi tiến độ của bạn.
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
              <Box sx={{ p: 1.5, borderRadius: 2, mr: 2, display: 'flex', color: 'primary.main', bgcolor: 'rgba(59, 130, 246, 0.1)' }}>
                <AutoStoriesIcon />
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                  Tổng số bài học
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {stats.total}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
              <Box sx={{ p: 1.5, borderRadius: 2, mr: 2, display: 'flex', color: 'success.main', bgcolor: 'rgba(16, 185, 129, 0.1)' }}>
                <CheckCircleIcon />
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                  Đã hoàn thành
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {stats.completed}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
              <Box sx={{ p: 1.5, borderRadius: 2, mr: 2, display: 'flex', color: 'warning.main', bgcolor: 'rgba(245, 158, 11, 0.1)' }}>
                <PlayCircleIcon />
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                  Đang học dở
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {stats.learning}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
              <Box sx={{ p: 1.5, borderRadius: 2, mr: 2, display: 'flex', color: 'secondary.main', bgcolor: 'rgba(139, 92, 246, 0.1)' }}>
                <EmojiEventsIcon />
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                  Tỷ lệ hoàn thành
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {stats.percentage}%
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {/* Current Lesson */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, fontFamily: 'Outfit' }}>
            Bài học hiện tại
          </Typography>
          
          {isFinishedAll ? (
            <Card
              sx={{
                p: 4,
                textAlign: 'center',
                border: '1px solid',
                borderColor: 'success.light',
                bgcolor: 'rgba(16, 185, 129, 0.02)',
                borderRadius: 3,
                boxShadow: 'none',
              }}
            >
              <EmojiEventsIcon sx={{ fontSize: '3.5rem', color: 'warning.main', mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 1, fontFamily: 'Outfit', fontWeight: 700 }}>
                Chúc mừng bạn đã hoàn thành lộ trình!
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Bạn đã hoàn thành xuất sắc tất cả 33 bài học trong chương trình huấn luyện tư duy AI.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/roadmap')}
                sx={{ px: 3, py: 1, fontWeight: 600, borderRadius: 2 }}
              >
                Xem lại Roadmap
              </Button>
            </Card>
          ) : (
            currentLesson && (
              <Card
                sx={{
                  border: '1px solid',
                  borderColor: 'primary.light',
                  bgcolor: 'rgba(59, 130, 246, 0.02)',
                  borderRadius: 3,
                  boxShadow: 'none',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="caption" color="primary" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>
                    {currentPhase?.title} — BÀI {currentLesson.lessonNumber}
                  </Typography>
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 800, mt: 1, mb: 2, fontFamily: 'Outfit' }}>
                    {currentLesson.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    {currentLesson.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                    {currentLesson.concepts.map((concept) => (
                      <Chip key={concept} label={concept} size="small" variant="filled" sx={{ bgcolor: 'rgba(59, 130, 246, 0.08)', color: 'primary.main', fontWeight: 500 }} />
                    ))}
                  </Box>

                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => navigate(`/lesson/${currentLesson?.id}`)}
                    sx={{ px: 4, py: 1.2, fontWeight: 700, borderRadius: 2, boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}
                  >
                    Tiếp tục học bài này
                  </Button>
                </CardContent>
              </Card>
            )
          )}
        </Grid>

        {/* Suggested Next Lessons */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, fontFamily: 'Outfit' }}>
            Bài học tiếp theo
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            {nextLessons.length > 0 ? (
              nextLessons.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  status={progress[lesson.id]?.status || 'not-started'}
                />
              ))
            ) : (
              !isFinishedAll && (
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  Không còn bài học gợi ý nào khác. Hãy tập trung hoàn thành bài học hiện tại của bạn.
                </Typography>
              )
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
