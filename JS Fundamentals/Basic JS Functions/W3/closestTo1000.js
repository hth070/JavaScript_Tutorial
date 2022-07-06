function closest_to_450(x, y) {
    if (x != y)
    {
    x1 = Math.abs(x - 450);
    y1 = Math.abs(y - 450);
  
    if (x1 < y1)
    {
      return x;
    }
    if (y1 < x1)
    {
      return y;
    }
    return 0;
    }
    else
      return false;
  }
  
  console.log(closest_to_450(400, 401));
  console.log(closest_to_450(-400, -401));
  console.log(closest_to_450(402, 402));