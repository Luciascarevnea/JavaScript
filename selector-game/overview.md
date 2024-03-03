Calea pe care o parcurg datele:


``````

<textarea 
        ...
        value="h1 {...}"    <------ user input
        ... \
        ...  +---------------------+
        ...                        |
                            b      |
        id="inputCode"             |
        ...     |                  |
                |                  |
                v                  v
            variable: inputCode.value --- String
                            .split('{')
                                   |
                                   v
                        ['h1' , '  ...}'] --Array   
                                   | \
                                   v  +---+
                                  [0]     |
                                   |      v
                                   |     [1]
                                   |      |
                                   |      | 
                                   |      v
                                   |      '...}' .replace ('}','')
                                   |      v
                                   |     ...
                                   v
                                  'h1' / selector   

