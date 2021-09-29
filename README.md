INSTRUCTIONS

-> Most of the code its very well documented, so read commets found inside of app.js

*--- IMPORTANT ----* 

For each file you want to convert from csv or txt to json, it is needed to specify the columns manually and the name of those, since it is important to have a consistent json naming convention on every property

For example, for the given PADRON_ELECTORAL.txt: 


it starts with the following lines: 

100339724,109007,,20231119,00000,JOSE                          ,DELGADO                   ,CORRALES                  
100842598,108001,,20261024,00000,CARMEN                        ,CORRALES                  ,MORALES                   
100842638,301027,,20200731,00000,RAFAEL                        ,AGUERO                    ,MORA                

You need to manually create the columns for each of the columns you might want to, i.e:

--> cedula, codelec,   relleno,   vencimiento,   relleno2,          nombre,       apellido1,   apellido2
    100339724,109007,,20231119,00000,JOSE                          ,DELGADO                   ,CORRALES                  
    100842598,108001,,20261024,00000,CARMEN                        ,CORRALES                  ,MORALES                   
    100842638,301027,,20200731,00000,RAFAEL                        ,AGUERO                    ,MORA                

so it will generate a json file like where each item of the array goes as follow: 

{"cedula":"901160320","codelec":"203008","relleno":"","vencimiento":"20300204","relleno2":"00000","nombre":"CHRISTOPHER BRYAN""apellido1":"ROQUE","apellido2":"ARAYA"}

