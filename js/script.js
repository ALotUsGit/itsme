// index.html 스크립트
$(function(){
    // work 모달 닫기
    $(".modal .close").on("click", function(){
        $(this).parents(".modal").addClass("hidden");
        document.body.style.overflow = "auto";
    }); // --  work 모달 닫기

    // 같은 클래스 가지고 있는 모달 찾아서 오픈하기
    $(".sec03 .contents .work_modal_open").on("click", function(event){
        event.preventDefault();

        const thisHasClass = $(this).attr("class").split(" "); 
        const modalHasClass = $(".modal").attr("class").split(" "); 
        const checkClasses = thisHasClass.filter(value => modalHasClass.includes(value));

        if(checkClasses.length > 0){
            modalHasClass.forEach(value => $("main ." + value).removeClass("hidden"));
            document.body.style.overflow = "hidden";
        }else{
            $(".modal").addClass("hidden");
            alert("준비중입니다.");
            document.body.style.overflow = "auto";
        }
    }); // -- 같은 클래스 가지고 있는 모달 찾아서 오픈하기
});