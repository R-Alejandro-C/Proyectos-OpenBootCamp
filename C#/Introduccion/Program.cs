

Coord cordenadas = new Coord(3,1,4);
Coord coordenadas2 = cordenadas with { X = 2 };

Console.WriteLine(cordenadas.X);
Console.WriteLine(cordenadas.Y);

Console.WriteLine(coordenadas2);

public struct Coord
{
    public Coord(float x, float y, float z)
    {
        X = x;
        Y = y;
        Z = z;
    }

    public float X{get; set;}
    public float Z{get; set;}
    public float Y{get; set;}

public override string ToString() => $"({X},{Y},{Z})";

}