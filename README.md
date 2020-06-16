# traveling-salesperson-algorithm-visualization
this is traveling salesperson algorithms</br> this is used to calculate the shortest distance between nodes</br>
You can imagine that you have a lot of cities and you should vist all these cities</br> 
this algorithm to tell you what is the best way you should take
</br> I wrote this because I wanna know how it's work </br>
I wrote this in javascript by using P5js Libarary</br> 
<b> website Link :-</b> https://michael-maurice.github.io/traveling-salesperson-algorithm-visualization/   </br>
<b>video Link :- </b> https://www.youtube.com/watch?v=5WMOBLav8tQ     </br>

<h2> calculate distance fuction</h2>
<code>
    
    function calcDistance(points) {
     var sum = 0;
     for (var i = 0; i < points.length - 1; i++) {
     var d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    sum += d;
    }
     return sum;
    }

</code>
