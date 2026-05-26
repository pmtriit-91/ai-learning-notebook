import React from 'react';
import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import TerminalIcon from '@mui/icons-material/Terminal';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { ProgressBar } from './ProgressBar';

interface SidebarProps {
  stats: {
    completed: number;
    total: number;
    percentage: number;
  };
}

export const Sidebar: React.FC<SidebarProps> = ({ stats }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Roadmap học tập', icon: <AltRouteIcon />, path: '/roadmap' },
    { text: 'Prompt Playbook', icon: <TerminalIcon />, path: '/playbook' },
    { text: 'Nhật ký học tập', icon: <HistoryEduIcon />, path: '/log' },
  ];

  return (
    <Box
      sx={{
        width: 280,
        height: '100vh',
        backgroundColor: '#1e293b', // Slate 800 - dark theme cho sidebar cực sang
        color: '#f8fafc',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid',
        borderColor: '#334155',
      }}
    >
      {/* Brand Header */}
      <Box
        sx={{
          p: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')}
      >
        <AutoAwesomeIcon sx={{ color: '#10b981', fontSize: '2rem' }} />
        <Box>
          <Typography variant="h6" sx={{ letterSpacing: -0.5, lineHeight: 1.1, fontFamily: 'Outfit', fontWeight: 800 }}>
            AI Learning
          </Typography>
          <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 500 }}>
            Personal Notebook
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: '#334155' }} />

      {/* Menu List */}
      <List sx={{ flexGrow: 1, px: 2, py: 3 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path !== '/' && location.pathname.startsWith(item.path));
          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  borderRadius: 2,
                  px: 2.5,
                  py: 1.5,
                  backgroundColor: isActive ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                  color: isActive ? '#10b981' : '#cbd5e1',
                  borderLeft: isActive ? '4px solid #10b981' : '4px solid transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    color: '#f8fafc',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive ? '#10b981' : '#94a3b8',
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography sx={{ fontSize: '0.95rem', fontWeight: isActive ? 700 : 500 }}>
                      {item.text}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Progress Widget */}
      <Box sx={{ p: 3, backgroundColor: '#0f172a', borderTop: '1px solid #334155' }}>
        <Typography variant="subtitle2" sx={{ color: '#94a3b8', fontWeight: 600, mb: 1 }}>
          Tổng tiến độ học tập
        </Typography>
        <ProgressBar
          value={stats.percentage}
          completedCount={stats.completed}
          totalCount={stats.total}
          showLabels={true}
        />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Typography
            variant="caption"
            sx={{
              color: '#64748b',
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            V1 Static personal notebook
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
