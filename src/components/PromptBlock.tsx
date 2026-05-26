import React, { useState } from 'react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

interface PromptBlockProps {
  content: string;
}

export const PromptBlock: React.FC<PromptBlockProps> = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Không thể sao chép văn bản: ', err);
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#0f172a', // Slate 900 cho code block cực đẹp
        borderRadius: 2,
        border: '1px solid #1e293b',
        p: 2.5,
        pr: 6,
        my: 2,
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      }}
    >
      <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
        <Tooltip title={copied ? "Đã sao chép!" : "Sao chép prompt"}>
          <IconButton
            onClick={handleCopy}
            size="small"
            sx={{
              color: 'grey.400',
              '&:hover': {
                color: 'common.white',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              },
            }}
          >
            {copied ? <CheckIcon fontSize="small" sx={{ color: '#10b981' }} /> : <ContentCopyIcon fontSize="small" />}
          </IconButton>
        </Tooltip>
      </Box>
      <Typography
        variant="body2"
        component="pre"
        sx={{
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          fontSize: '0.875rem',
          lineHeight: 1.6,
          color: '#e2e8f0', // Slate 200
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          margin: 0,
        }}
      >
        {content}
      </Typography>
    </Box>
  );
};
