const scenarios = {
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
                theme: 'information',
                showDuration: 100000,
                closeOnClick: false,
                onclick: function(event){ location.href = 'https://lin.ee/lrYsHQD'; }
            })({
                title: 'คำแนะนำในการเลือกธนาคารฝาก',
                message: ' '
            });
            window.createNotification({
                theme: 'success',
                showDuration: 100000,
                closeOnClick: false,
                onclick: function(event){ location.href = 'https://lin.ee/lrYsHQD'; }
            })({
                title: '',
                message: 'ฝากทศนิยม:  เครดิตเข้าออโต้  ไม่ต้องส่งสลิป  โอนได้จากทุกธนาคาร'
            });
            window.createNotification({
                theme: 'success',
                showDuration: 100000,
                closeOnClick: false,
                onclick: function(event){ location.href = 'https://lin.ee/lrYsHQD'; }
            })({
                title: '',
                message: 'ฝากออโต้ปกติ:  เครดิตเข้าออโต้  ไม่ต้องส่งสลิป  โอนได้จากทุกธนาคารยกเว้นไทยพาณิชย์'
            });
            window.createNotification({
                theme: 'warning',
                showDuration: 100000,
                closeOnClick: false,
                onclick: function(event){ location.href = 'https://lin.ee/lrYsHQD'; }
            })({
                title: '',
                message: 'ฝากออโต้ปกติ:  หากโอนผ่านไทยพาณิชย์  เครดิตไม่เข้าออโต้  แจ้งสลิปที่แอดมินทุกยอดฝาก'
            });
            window.createNotification({
                theme: 'warning',
                showDuration: 100000,
                closeOnClick: false,
                onclick: function(event){ location.href = 'https://lin.ee/lrYsHQD'; }
            })({
                title: '',
                message: 'ฝากผ่านทรูวอลเล็ต:  เครดิตไม่เข้าออโต้  แจ้งสลิปที่แอดมินทุกยอดฝาก'
            });
            return;
        case scenarios.wallet_slip_warning:
            window.createNotification({
                theme: 'information',
                showDuration: 100000,
                closeOnClick: false,
                onclick: function(event){ location.href = 'https://lin.ee/lrYsHQD'; }
            })({
                title: 'หากลูกค้าโอนผ่านทรูวอลเล็ต หรือ โอนด้วยธ.ไทยพาณิชย์แต่ไม่เลือกแบบทศนิยม',
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
                showDuration: 100000,
                closeOnClick: false,
                onclick: function(event){ location.href = 'https://lin.ee/lrYsHQD'; }
            })({
                title: 'ขณะนี้ ระบบธนาคารไทยพาณิชย์ขัดข้อง อาจส่งผลให้การฝากบางรายการล่าช้ากว่าปกติ (เฉพาะลูกค้าที่ฝากด้วยธ.ไทยพาณิชย์)',
                message: 'หากเกิน 10 นาที เครดิตยังไม่เข้า สามารถส่งสลิปให้แอดมินตรวจสอบได้เลยค่ะ'
            });
            window.createNotification({
                theme: 'information',
                showDuration: 100000,
                closeOnClick: false,
                onclick: function(event){ location.href = 'https://lin.ee/lrYsHQD'; }
            })({
                message: 'ฝากครั้งต่อไป แอดแนะนำให้เลือกฝากแบบทศนิยมนะคะ (เครดิตเข้าออโต้ภายใน 1 นาที ไม่ต้องส่งสลิป)'
            });
            return;
    }

}
