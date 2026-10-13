import { Users, Truck, FileText, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DispatchItem {
  id: string;
  driverName: string;
  plateNumber: string;
  load: string;
  passcardNumber: string;
  status?: string;
}

interface ActiveDispatchesProps {
  dispatches?: DispatchItem[];
}

export function TankUtilization({ dispatches }: ActiveDispatchesProps) {
  // Fallback mock records if no data is passed down yet
  const dispatchList = dispatches && dispatches.length > 0 ? dispatches : [
    {
      id: '1',
      driverName: 'Juma Otieno',
      plateNumber: 'KDT 991Q',
      load: '35,000L - Automotive Gas Oil (AGO)',
      passcardNumber: 'PC-884920',
    },
    {
      id: '2',
      driverName: 'David Koech',
      plateNumber: 'KCU 442B',
      load: '30,000L - Premium Mogas (PMS)',
      passcardNumber: 'PC-884921',
    },
    {
      id: '3',
      driverName: 'Hassan Mohamed',
      plateNumber: 'KDD 105X',
      load: '20,000L - Dual Purpose Kerosene (DPK)',
      passcardNumber: 'PC-884922',
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800">Active Driver Dispatches</h3>
              <p className="text-xs text-gray-500 mt-0.5">Assigned personnel, trucks, and passcards</p>
            </div>
          </div>
          <Link to="/dispatches" className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1">
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="space-y-3">
          {dispatchList.map((item) => (
            <div key={item.id} className="p-3 rounded-lg bg-gray-50 border border-gray-100 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-gray-500" />
                  <span className="text-xs font-bold text-gray-800">{item.plateNumber}</span>
                  <span className="text-xs text-gray-400">·</span>
                  <span className="text-xs font-medium text-gray-700">{item.driverName}</span>
                </div>
                <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-[10px] font-semibold">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Pass: {item.passcardNumber}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-1.5 text-[11px] text-gray-500 bg-white p-2 rounded border border-gray-100">
                <FileText className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span className="truncate">Load: <strong className="text-gray-700">{item.load}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
