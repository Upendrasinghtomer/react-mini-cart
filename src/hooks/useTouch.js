import { useState } from "react";

export default function useTouch(
  isDrawer = false,
  onSwipeFromLeft = null,
  onSwipeFromRight = null
) {
  const [touchPosition, setTouchPosition] = useState(null);

  const onTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const onTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    if (!isDrawer) {
      if (touchDown > 30 && diff > 7 && onSwipeFromRight != null) onSwipeFromRight();
      if (touchDown > 30 && diff < -7 && onSwipeFromLeft != null) onSwipeFromLeft();
    } else {
      if (touchDown < 7 && onSwipeFromLeft != null) onSwipeFromLeft();
    }
    setTouchPosition(null);
  };

  return {
    touchPosition,
    onTouchStart,
    onTouchMove,
  };
}
