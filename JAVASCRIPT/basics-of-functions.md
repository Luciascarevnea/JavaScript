## Functions as tools
* functional interface/ signature
* arguments-> parameters
* return value


--------------CALLER--------------------
|                                      |
|                                      |
|                                      |
|                                      |
|                                      |
|                                      |
|                                      |
|     foo(a1, a2, a3, ...)   res       |
|              v              ^        |
|              v              ^        |
-------------- v -------------^---------
               v              ^
    ---- (p1,p2,p2...) ------ ^ ----
    |                              |
    |      OPERATIONS >>>> RETURN  |
    |                              |
    --------------------------------

## IN CODE
* either by direct name:

   functionName(value)
   result = functionName(value)

* or by container and name

   container.functionName(value)   (din cutia data functia de dupa punct)
   result = container.functionName(value)
