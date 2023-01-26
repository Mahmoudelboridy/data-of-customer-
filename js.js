let namen=document.getElementById('name');
let tel1=document.getElementById('tel1');
let tel2=document.getElementById('tel2');
let anoan=document.getElementById('anoan');
let submit=document.getElementById('submit');
let datazabon;
let mood='create';
let tmp;
if(localStorage.zabon != null){
    datazabon=JSON.parse(localStorage.zabon);
    }
    else{
    datazabon=[];
    }
    submit.onclick=function(){
        let newzapon = {
        name:namen.value,
        tel1:tel1.value,
        tel2:tel2.value,
        anoan:anoan.value,
        }
        if(namen.value != '' && tel1.value !=''&& tel2.value !=''&& anoan.value!=''){
            if(mood === 'create'){
                    datazabon.push(newzapon);
                
            }
            else{
                datazabon[tmp]=newzapon;
                mood='create';
                submit.innerHTML='اضافة';
            }
            cleardata();
            }
            localStorage.setItem('zabon',JSON.stringify(datazabon));
            showdata();
            }
            function cleardata(){
                namen.value='';
                tel1.value='';
                tel2.value='';
                anoan.value='';
                }
                function showdata(){
                let table ='';
                for(let i=0;i<datazabon.length;i++){
                table += `
                  <tr>
                  <td><button onclick="updatdata(${i})" id="update">تعديل</button></td>
                  <td><button onclick="deletedata(${i})" id="delete">حذف</button></td>
                   <td>${datazabon[i].anoan}</td>
                   <td>${datazabon[i].tel1}</td>
                   <td>${datazabon[i].tel2}</td>
                   <td>${datazabon[i].name}</td>
                   <td>${i+1}</td>
                  </tr>`
                  ;
                }
                document.getElementById('tbody').innerHTML=table;
                let btndelete = document.getElementById('deleteall');
                if(datazabon.length>0){
                    btndelete.innerHTML=`
                     <button onclick="deleteall()" >حذف جميع الزبائن(${datazabon.length})</button>
                     `
                }
                else{
                        btndelete.innerHTML='';
                }
                }
                showdata();
                function deletedata(i){
                    datazabon.splice(i,1);
                    localStorage.zabon=JSON.stringify(datazabon);
                    showdata();	
                    }
                    function deleteall(){
                        localStorage.clear();
                        datazabon.splice(0);
                        showdata();
                    }
                    function updatdata(i){
                        namen.value=datazabon[i].name;
                        tel1.value=datazabon[i].tel1;
                        tel2.value=datazabon[i].tel2;
                        anoan.value=datazabon[i].anoan;
                        submit.innerHTML='تعديل';
                        mood='update';
                        tmp=i;
                        scroll({
                        top:0,
                        behavior:'smooth'
                        })
                        }
                        function searchdata(value){
                            let table=' ';
                            for(let i=0;i<datazabon.length;i++){
                                if(datazabon[i].name.includes(value)){
                                    table += `
                          <tr>
                          <td><button onclick="updatdata(${i})" id="update">تعديل</button></td>
                  <td><button onclick="deletedata(${i})" id="delete">حذف</button></td>
                   <td>${datazabon[i].anoan}</td>
                   <td>${datazabon[i].tel1}</td>
                   <td>${datazabon[i].tel2}</td>
                   <td>${datazabon[i].name}</td>
                   <td>${i+1}</td>
                          </tr>`
                          ;
                            }
                        }
                        
                        document.getElementById('tbody').innerHTML=table;
                        
                        }
                      
                        