import React from 'react';
import { Share2 } from 'lucide-react';
import { Button } from './Button';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';

interface ShareButtonProps {
  code: string;
}

export function ShareButton({ code }: ShareButtonProps) {
  const handleShare = async () => {
    const shareId = nanoid(10);
    const shareUrl = `${window.location.origin}/share/${shareId}`;
    
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast.success('Share link copied to clipboard!');
    } catch (error) {
      toast.error('Failed to create share link');
    }
  };

  return (
    <Button onClick={handleShare} variant="outline" size="sm">
      <Share2 className="h-4 w-4 mr-2" />
      Share
    </Button>
  );
}