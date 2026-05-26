import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLessonProgress } from '../hooks/useLessonProgress';
import { phases } from '../data/roadmap';
import { lessons } from '../data/lessons';
import { RoadmapCard } from '../components/RoadmapCard';

export const Roadmap: React.FC = () => {
  const { progress, getStats } = useLessonProgress();
  const stats = getStats();

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', width: '100%' }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 800, fontFamily: 'Outfit', mb: 1 }}>
          Lộ trình học tập AI
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Bao gồm 5 Phase đi từ kiến thức AI căn bản đến việc xây dựng sản phẩm AI thực tiễn hoàn chỉnh.
        </Typography>
      </Box>

      {/* Phases List */}
      <Box>
        {phases.map((phase) => {
          // Phase này có phải là phase hiện tại đang học không
          const isCurrentPhase = stats.currentPhaseId === phase.id;

          return (
            <RoadmapCard
              key={phase.id}
              phase={phase}
              lessonsList={lessons}
              progressMap={progress}
              defaultExpanded={isCurrentPhase}
            />
          );
        })}
      </Box>
    </Box>
  );
};
