

      browser
         |
         |         window
         |        /
+----------------+---+   <------global variables
|  window...         |
|  document...       |   ENV
|                    |
|  nameInput         |
|  hiBtn             |   sunt un fel de selectori dupa id
|  msgContainer      |   ne dau acces la document
|                    |
|  name = "John"     |   CUSTOM
|  age = 10          |
|  alive = true      |
+--------------------+          
         ^
         |
         |        --prin intermediul unui document(index.html)
+----------------/---+
|                    |
|     link       <-------------CSS  (style.css)
|     script     <-------------JS   (script.js)
|                    |
|                    |    //custom variables
|                    |       name = "John"
|                    |       age = 10
+--------------------+       alive = true

<tag>
  .... <--------.innerHTML(citesti sau pui valori)
<tag>  

'\n -> semnifica spatiul care trece din rand nou
\n'


(env) window / browser
+-------------------+  <---> built in functions / global funct.
|   alert()         |  
|   prompt()        | <-------+functii predefinite
|   confirm()       |         |
|                   |         |
|                   |         |
|   reply()        |        custom functions
|                   |
|                   |
+-------------------+



