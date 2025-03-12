import { Button } from "@/components/ui/button";
import React from "react";
import { FaHeart } from "react-icons/fa";
function FavoritesButton() {
  return (
    <div>
      <Button >
        <FaHeart />
      </Button>
    </div>
  );
}

export default FavoritesButton;
