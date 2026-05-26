import { useState, useEffect } from 'react';
import type { LessonProgress, LessonStatus, LearningLogEntry } from '../types/lesson';
import { lessons } from '../data/lessons';

const PROGRESS_KEY = 'ai_learning_notebook_progress';
const LOG_KEY = 'ai_learning_notebook_logs';

interface ProgressMap {
  [lessonId: string]: LessonProgress;
}

export function useLessonProgress() {
  const [progress, setProgress] = useState<ProgressMap>(() => {
    const saved = localStorage.getItem(PROGRESS_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Lỗi phân tích cú pháp progress từ localStorage', e);
      }
    }
    
    // Khởi tạo mặc định
    const initial: ProgressMap = {};
    lessons.forEach((l) => {
      initial[l.id] = { status: 'not-started' };
    });
    return initial;
  });

  const [logs, setLogs] = useState<LearningLogEntry[]>(() => {
    const saved = localStorage.getItem(LOG_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Lỗi phân tích cú pháp logs từ localStorage', e);
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem(LOG_KEY, JSON.stringify(logs));
  }, [logs]);

  // Cập nhật trạng thái bài học
  const updateLessonStatus = (lessonId: string, status: LessonStatus) => {
    setProgress((prev) => ({
      ...prev,
      [lessonId]: {
        ...prev[lessonId],
        status,
        completedAt: status === 'completed' ? new Date().toISOString() : prev[lessonId]?.completedAt,
      },
    }));
  };

  // Cập nhật ghi chú của bài học
  const updateLessonNotes = (lessonId: string, notes: string) => {
    setProgress((prev) => ({
      ...prev,
      [lessonId]: {
        ...prev[lessonId],
        userNotes: notes,
      },
    }));
  };

  // Thêm log học tập mới
  const addLogEntry = (entry: Omit<LearningLogEntry, 'id' | 'date'>) => {
    const newEntry: LearningLogEntry = {
      ...entry,
      id: `log-${Date.now()}`,
      date: new Date().toLocaleDateString('vi-VN'),
    };
    setLogs((prev) => [newEntry, ...prev]);
  };

  // Xóa một log
  const deleteLogEntry = (id: string) => {
    setLogs((prev) => prev.filter((item) => item.id !== id));
  };

  // Tính toán số liệu thống kê
  const getStats = () => {
    const total = lessons.length;
    const completed = Object.values(progress).filter((p) => p.status === 'completed').length;
    const learning = Object.values(progress).filter((p) => p.status === 'learning').length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    // Tìm phase hiện tại hoạt động (phase đầu tiên có bài học có trạng thái 'learning' hoặc 'not-started')
    // Để cho đơn giản, tính phase hiện tại dựa trên bài học cuối cùng chưa hoàn thành
    let currentPhaseId = 'phase-1';
    for (const lesson of lessons) {
      const status = progress[lesson.id]?.status || 'not-started';
      if (status !== 'completed') {
        currentPhaseId = lesson.phaseId;
        break;
      }
    }

    return {
      total,
      completed,
      learning,
      percentage,
      currentPhaseId,
    };
  };

  return {
    progress,
    logs,
    updateLessonStatus,
    updateLessonNotes,
    addLogEntry,
    deleteLogEntry,
    getStats,
  };
}
