export default function Representative(){
    return(
        <div className="w-full px-5 md:px-8 mt-[74px] py-5 bg-white md:rounded-2xl md:mb-[100px]">
              <div className="uppercase   font-bold text-[20px]">
                Representative Example
              </div>
              <table class="mt-6 text-[7px] md:text-[14px] mytable w-full">
                <tbody>
                  <tr class="bg-black text-white">
                    <td class="p-2 rounded-tl-xl">
                      <div className=" ">Product</div>
                    </td>
                    <td class="p-2 w-fit">
                      <div className=" ">APR</div>
                    </td>
                    <td class="p-2">
                      <div className=" ">Total Amount Payable</div>
                    </td>
                    <td class="p-2">
                      <div className=" ">Agreement Term</div>
                    </td>
                    <td class="p-2">
                      <div className=" ">Monthly Payments</div>
                    </td>
                    <td class="p-2 rounded-tr-xl">
                      <div className=" ">Fixed Interest Rate</div>
                    </td>
                  </tr>
                  <tr class="bg-[#f7f7f7] text-black">
                    <td class="p-2 rounded-bl-xl">
                      <div className=" ">Hire Purchase</div>
                    </td>
                    <td class="p-2">
                      <div className=" ">10.90%</div>
                    </td>
                    <td class="p-2">
                      <div className=" ">£17,126.72</div>
                    </td>
                    <td class="p-2">
                      <div className=" ">46</div>
                    </td>
                    <td class="p-2">
                      <div className=" ">£296.39</div>
                    </td>
                    <td class="p-2 rounded-br-xl">
                      <div className=" ">10.90%</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6"></div>
              <strong>Disclosure</strong> We work with a number of carefully
              selected credit providers who may be able to offer you finance for
              your purchase. We are only able to offer finance products from
              these providers.
            </div>
    )
}