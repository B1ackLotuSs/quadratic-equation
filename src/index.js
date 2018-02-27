module.exports = function solveEquation(equation) {
  // your implementation
    
    // solveEquation('-20 * x^2 - 108797540 * x - 130011773690520')
     
    var A = equation.substring(0,equation.indexOf("*")) ; //-20, длина = 4
    var zn = equation.substring((A.length)-1+7, (A.length)-1+8 ) ; // -
    var B = equation.substring(((A.length)-1+9),equation.lastIndexOf("*")) ; //108797540 (учитывая пробелы вели счет символов)
    var zna = equation.substring((A.length)-1+8+(B.length)+5 , (A.length)-1+8 + (B.length)+6) ;  // -
    var C = equation.substring(((A.length)-1+8+(B.length+6))) ; // - 130011773690520        

    
    var a = Number(A);
    var b = Number(B);
    var c = Number(C);
    
    var M = -1 ;
    
    if ((zn === '-' ) && (zna !== '-' )) {
    var D = (Math.pow((b),2))-(4*(a)*(c)) ; // - 108797540^2 - 4*(-20)*(- 130011773690520)
    var xfirst = ((-(b)*(M)+Math.sqrt(D)))/(2*(a)) ; //  (- (- 108797540) + sqrt(D))/(2*(-20))
    var xsecond = (-(b)*(M)-Math.sqrt(D))/(2*(a)) ; // ( (- 108797540) + sqrt(D))/(2*(-20))
    var mas = [] ;
    var xfirstG = Math.round(xfirst) ;
    var xsecondG = Math.round(xsecond) ;
    if (xfirst<xsecond) {
    mas.push(xfirstG,xsecondG) ;
        return mas ;
    } else {
        mas.push(xsecondG,xfirstG) ;
        return mas ;
    }
        }
    if ((zna === '-' ) && (zn !== '-' )) {
     D = (Math.pow((b),2))-(4*(a)*(c)*(M)) ; // - 108797540^2 - 4*(-20)*(- 130011773690520)
     xfirst = ((-(b)+Math.sqrt(D)))/(2*(a)) ; //  (- (- 108797540) + sqrt(D))/(2*(-20))
     xsecond = (-(b)-Math.sqrt(D))/(2*(a)) ; // ( (- 108797540) + sqrt(D))/(2*(-20))
     mas = [] ;
     xfirstG =  Math.round(xfirst) ;
     xsecondG =  Math.round(xsecond) ;
    if (xfirstG<xsecondG) {
    mas.push(xfirstG,xsecondG) ;
        return mas ;
    } else {
        mas.push(xsecondG,xfirstG) ;
        return mas ;
    }
    }
    if ((zna === '-' ) && (zn === '-' )) {
     D = (Math.pow((b),2))-(4*(a)*(c)*(M)) ; // - 108797540^2 - 4*(-20)*(- 130011773690520)
     xfirst = ((-(b)+Math.sqrt(D)))/(2*(a)*(M)) ; //  (- (- 108797540) + sqrt(D))/(2*(-20))
     xsecond = (-(b)-Math.sqrt(D))/(2*(a)*(M)) ; // ( (- 108797540) + sqrt(D))/(2*(-20))
     mas = [] ;
    xfirstG =  Math.round(xfirst) ;
    xsecondG =  Math.round(xsecond) ;
    if (xfirstG<xsecondG) {
    mas.push(xfirstG,xsecondG) ;
        return mas ;
    } else {
        mas.push(xsecondG,xfirstG) ;
        return mas ;
    }
    }
    
    if ((zna !== '-' ) && (zn !== '-' )) {
     D = (Math.pow((b),2))-(4*(a)*(c)) ; // - 108797540^2 - 4*(-20)*(- 130011773690520)
     xfirst = ((-(b)+Math.sqrt(D)))/(2*(a)) ; //  (- (- 108797540) + sqrt(D))/(2*(-20))
     xsecond = (-(b)-Math.sqrt(D))/(2*(a)) ; // ( (- 108797540) + sqrt(D))/(2*(-20))
     mas = [] ;
     xfirstG =  Math.round(xfirst) ;
     xsecondG =  Math.round(xsecond) ;
    if (xfirstG<xsecondG) {
    mas.push(xfirstG,xsecondG) ;
        return mas ;
    } else {
        mas.push(xsecondG,xfirstG) ;
        return mas ;
    }
    }
}
