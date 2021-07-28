1. forEach() 
    无法跳出去，break没用，只能通过try catch抛出错误跳出
    没有返回值
2. map()
    有返回值，返回一个新的数组
   
3. find()
   有返回值，返回满足判断要求的第一个值
4. indexOf()
   有返回值，搜索数组中的元素，并返回所在位置
5. every()
   有返回值，返回false or true ，有一个不满足就返回false
6. some()
   有返回值，返回false or true ，有一个满足就返回true
7. filter()
    有返回值，返回一个满足条件的新数组
   
块：div,p,h1-h6,table,ul,ol,li,section,header,main
行内：span,input,select,a,b,strong,em,i,img,textarea,img,button
行内块元素：img,input,select,textarea,button
对于行内块元素,既不独占一行，也可设置宽高，margin，padding也都起作用
区别:
1. 块独占一行，行内元素不换行，
2. 多个块从上到下排列，多个行内从左到右排列
3. 块元素对宽高，margin，padding都起作用；
   行内元素对宽高不起作用，对margin的左右起作用，对padding都起作用