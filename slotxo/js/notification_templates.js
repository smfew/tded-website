var scenarios = {
    register_bank_recommendation: "register_bank_recommendation",
    wallet_slip_warning: "wallet_slip_warning",
    autoplay_maintenance: "autoplay_maintenance",
	kbank_maintenance: "kbank_maintenance",
	scb_maintenance: "scb_maintenance",
    kbank_unstable: "kbank_unstable",
    scb_unstable: "scb_unstable",
}

function notify(scenario){
    if(!scenario) throw new Error("not defined");

    switch(scenario){
        case scenarios.register_bank_recommendation:
            window.createNotification({
                theme: 'info',
                showDuration: 0,
                closeOnClick: true,
                displayCloseButton: true,
                positionClass: 'nfc-top-right'
            })({
                title: 'คำแนะนำในการเลือกธนาคารฝาก',
                message: ' '
            });
            window.createNotification({
                theme: 'success',
                showDuration: 0,
                closeOnClick: true,
                displayCloseButton: true,
                positionClass: 'nfc-top-right'
            })({
                title: 'ฝากแบบปกติ (จากทุกธนาคาร ยกเว้นไทยพาณิชย์)',
                message: 'เครดิตเข้าออโต้  ภายใน 1 นาที  ไม่ต้องส่งสลิปค่าา'
            });
            window.createNotification({
                theme: 'warning',
                showDuration: 0,
                closeOnClick: true,
                displayCloseButton: true,
                positionClass: 'nfc-top-right'
            })({
                title: 'ฝากแบบปกติผ่านไทยพาณิชย์ หรือ ฝากผ่านทรูวอลเล็ต',
                message: 'เครดิตไม่เข้าออโต้  แจ้งสลิปที่แอดมินทุกยอดฝากนะคะ'
            });
            return;
        case scenarios.wallet_slip_warning:
            window.createNotification({
                theme: 'info',
                showDuration: 0,
                closeOnClick: false,
                displayCloseButton: false,
                onclick: function(event){ location.href = 'https://lin.ee/lrYsHQD'; },
                positionClass: 'nfc-top-right'
            })({
                title: 'หากลูกค้าฝากแบบปกติผ่านไทยพาณิชย์ หรือ ฝากผ่านทรูวอลเล็ต',
                message: 'คลิกที่นี่ เพื่อแจ้งสลิปที่แอดมินได้เลยจ้า'
            });
            return;
        case scenarios.autoplay_maintenance:

            return;
        case scenarios.kbank_maintenance:

            return;
        case scenarios.scb_maintenance:

            return;
        case scenarios.kbank_unstable:

            return;
        case scenarios.scb_unstable:
            window.createNotification({
                theme: 'warning',
                showDuration: 0,
                closeOnClick: false,
                displayCloseButton: false,
                positionClass: 'nfc-top-right'
            })({
                title: 'ขณะนี้ ระบบธนาคารไทยพาณิชย์ขัดข้อง อาจส่งผลให้การฝากบางรายการล่าช้ากว่าปกติ (เฉพาะลูกค้าที่ฝากด้วยธ.ไทยพาณิชย์)',
                message: 'หากเกิน 10 นาที เครดิตยังไม่เข้า สามารถส่งสลิปให้แอดมินตรวจสอบได้เลยค่ะ'
            });
            window.createNotification({
                theme: 'info',
                showDuration: 0,
                closeOnClick: true,
                displayCloseButton: true,
                positionClass: 'nfc-top-right'
            })({
                message: 'ฝากครั้งต่อไป แอดแนะนำให้เลือกฝากแบบทศนิยมนะคะ (เครดิตเข้าออโต้ภายใน 1 นาที ไม่ต้องส่งสลิป)'
            });
            return;
    }

}
